import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramComponentsService} from "../../../services/components/rehab-program-components.service";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent, PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {
    ProtocolAddResultDialog
} from "../../../dialogs/protocol-add-result-dialog/protocol-add-result-dialog.component";
import {async, Observable, Subscription} from "rxjs";
import {ProgramForm} from "../../../models/program-form";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";
import {ProgramFormResult} from "../../../models/program-form-result";
import {ModuleFormResult} from "../../../models/module-form-result";

@Component({
    selector: 'app-protocol',
    templateUrl: './protocol.component.html',
    styleUrls: ['./protocol.component.css']
})
export class ProtocolComponent implements OnInit, OnDestroy {

    private rehabProgramComponentsService: RehabProgramComponentsService = inject(RehabProgramComponentsService);
    private rehabProgramService: RehabProgramService = inject(RehabProgramService);
    private dialogService = inject(TuiDialogService);

    private addedProgramFormsResults: ProgramFormResult[] = [];
    private addedModulesFormsResults: ModuleFormResult[] = [];
    private subscription: Subscription = new Subscription();

    programFormsResults: Observable<ProgramFormResult[]>;
    modulesFormsResults: Observable<ModuleFormResult[]>;

    rehabProgram: RehabProgram;
    isLoaded: boolean = false;

    protocolForm = new FormGroup({
        result: new FormControl(null),
        diagnosis: new FormControl(null),
        recommendations: new FormControl(null),
        programScales: new FormArray([]),
        modulesScales: new FormArray([])
    })

    ngOnInit(): void {
        const sub$ = this.rehabProgramComponentsService.program$.subscribe(
            {
                next: rehabProgram => {
                    if (rehabProgram != null) {
                        this.rehabProgram = rehabProgram;
                        this.isLoaded = true;
                    } else {
                        this.isLoaded = true
                    }
                }
            }
        )
        this.subscription.add(sub$);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    get programScales() {
        return this.protocolForm.get('programScales') as FormArray;
    }

    get modulesScales() {
        return this.protocolForm.get('modulesScales') as FormArray;
    }

    fetchProgramFormResults(programId: number): Observable<ProgramFormResult[]> {
        let ids: number[] = [];
        for (const addedResult of this.addedProgramFormsResults) {
            ids.push(addedResult.id);
        }
        if (ids.length === 0) {
            ids.push(-1);
        }
        return this.rehabProgramService.getProgramFormsResults(programId, ids)
    }

    fetchModulesFormsResults(programId: number) {
        let ids: number[] = [];
        for (const addedResult of this.addedModulesFormsResults) {
            ids.push(addedResult.id);
        }
        if (ids.length === 0) {
            ids.push(-1);
        }
        return this.rehabProgramService.getModulesFormsResults(programId, ids);
    }

    openDialog(content: PolymorpheusContent<TuiDialogContext>) {
        this.programFormsResults = this.fetchProgramFormResults(this.rehabProgram.id);
        this.modulesFormsResults = this.fetchModulesFormsResults(this.rehabProgram.id);
        this.dialogService.open(content).subscribe()
    }

    removeProgramFormResult(index: number) {
        this.programScales.removeAt(index);
        if (index > -1) {
            this.addedProgramFormsResults.splice(index, 1);
        }
    }

    removeModuleFormResult(index: number) {
        this.modulesScales.removeAt(index);
        if (index > -1) {
            this.addedModulesFormsResults.splice(index, 1);
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

    protected readonly async = async;
}
