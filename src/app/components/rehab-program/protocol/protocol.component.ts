import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramComponentsService} from "../../../services/components/rehab-program-components.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {ModuleEditDialogComponent} from "../../../dialogs/module-edit-dialog/module-edit-dialog.component";
import {
    ProtocolAddResultDialog
} from "../../../dialogs/protocol-add-result-dialog/protocol-add-result-dialog.component";
import {Subscription} from "rxjs";
import {ProgramForm} from "../../../models/program-form";

@Component({
    selector: 'app-protocol',
    templateUrl: './protocol.component.html',
    styleUrls: ['./protocol.component.css']
})
export class ProtocolComponent implements OnInit, OnDestroy {

    private rehabProgramComponentService: RehabProgramComponentsService = inject(RehabProgramComponentsService);
    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private protocolAddResultDialog = this.dialogService.open<ProgramForm>(
        new PolymorpheusComponent(ProtocolAddResultDialog, this.injector),
        {
            // data: this.module.id,
            dismissible: true,
            closeable: true,
            size: 'auto'
        }
    );

    private subscription: Subscription = new Subscription();

    protocolForm = new FormGroup({
        result: new FormControl(null),
        recommendations: new FormControl(null),
        scales: new FormArray([])
    })

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    get scales() {
        return this.protocolForm.get('scales') as FormArray;
    }

    openAddScaleDialog() {
        const sub$ = this.protocolAddResultDialog.subscribe(
            {
                next: data => {
                    console.log(data);
                    this.scales.push(new FormControl(this.formatData(data)))
                }
            }
        );
        this.subscription.add(sub$)
    }

    createProtocol() {
        console.log(this.protocolForm.value)
    }

    addScale() {
        this.scales.push(new FormControl("ШРМ 1: Легкие ограничения"))
    }

    formatData(programForm: ProgramForm) {
        let result: string[] = []
        result.push(programForm.form.name)
        result.push(programForm.interpretation)
        return result.join("\n");
    }
}
