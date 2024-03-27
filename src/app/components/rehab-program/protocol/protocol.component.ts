import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramComponentsService} from "../../../services/components/rehab-program-components.service";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {
    ProtocolAddResultDialog
} from "../../../dialogs/protocol-add-result-dialog/protocol-add-result-dialog.component";
import {Observable, Subscription} from "rxjs";
import {ProgramForm} from "../../../models/program-form";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";
import {ProgramFormResult} from "../../../models/program-form-result";

@Component({
    selector: 'app-protocol',
    templateUrl: './protocol.component.html',
    styleUrls: ['./protocol.component.css']
})
export class ProtocolComponent implements OnInit, OnDestroy {

    private rehabProgramComponentsService: RehabProgramComponentsService = inject(RehabProgramComponentsService);
    private rehabProgramService: RehabProgramService = inject(RehabProgramService);
    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private protocolAddResultDialog: Observable<ProgramForm>;
    private addedResults: ProgramForm[] = [];
    private subscription: Subscription = new Subscription();

    rehabProgram: RehabProgram | null;
    isLoaded: boolean = false;

    protocolForm = new FormGroup({
        result: new FormControl(null),
        diagnosis: new FormControl(null),
        recommendations: new FormControl(null),
        scales: new FormArray([])
    })

    ngOnInit(): void {
        const sub$ = this.rehabProgramComponentsService.program$.subscribe(
            {
                next: rehabProgram => {
                    this.rehabProgram = rehabProgram;
                    this.isLoaded = true;
                }
            }
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    get scales() {
        return this.protocolForm.get('scales') as FormArray;
    }

    openAddScaleDialog() {
        const sub1$ = this.rehabProgramComponentsService.program$.subscribe(
            {
                next: program => {
                    if (program != null) {
                        this.getResults(program.id);
                    }
                },
                error: err => {

                }
            }
        );
        this.subscription.add(sub1$);
    }

    getResults(programId: number) {
        let ids: number[] = [];
        for (const addedResult of this.addedResults) {
            ids.push(addedResult.id);
        }
        if (ids.length === 0) {
            ids.push(-1);
        }
        const sub$ = this.rehabProgramService.getProgramFormsResults(programId, ids).subscribe(
            programForms => {
                this.openDialog(programForms);
            }
        );
        this.subscription.add(sub$);
    }

    openDialog(programFormsResult: ProgramFormResult[]) {
        this.protocolAddResultDialog = this.dialogService.open<ProgramForm>(
            new PolymorpheusComponent(ProtocolAddResultDialog, this.injector),
            {
                data: programFormsResult,
                dismissible: true,
                closeable: true,
                size: 'auto'
            }
        );
        const sub$ = this.protocolAddResultDialog.subscribe(
            {
                next: data => {
                    console.log(data);
                    this.scales.push(new FormControl(this.formatData(data)))
                    this.addedResults.push(data);
                }
            }
        );
        this.subscription.add(sub$)
    }

    removeScale(index: number) {
        this.scales.removeAt(index);
        if (index > -1) {
            this.addedResults.splice(index, 1);
        }
    }

    createProtocol() {
        console.log(this.protocolForm.value)
    }

    formatData(programForm: ProgramForm) {
        let result: string[] = []
        result.push("Анкета: " + programForm.form.name);
        result.push("Дата прохождения: " + programForm.finishedAt)
        return result.join("\n");
    }
}
