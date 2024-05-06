import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramComponentsService} from "../../../services/components/rehab-program-components.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent, PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {Subscription} from "rxjs";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";
import {ProgramFormResult} from "../../../models/program-form-result";
import {ModuleFormResult} from "../../../models/module-form-result";
import {FormResultsDialogComponent} from "../../../dialogs/form-results-dialog/form-results-dialog.component";
import {CreateProtocolRequest} from "../../../models/request/create-protocol-request";

@Component({
    selector: 'app-protocol',
    templateUrl: './protocol.component.html',
    styleUrls: ['./protocol.component.css', '../../../app.component.css']
})
export class ProtocolComponent implements OnInit, OnDestroy {

    private rehabProgramComponentsService: RehabProgramComponentsService = inject(RehabProgramComponentsService);
    private rehabProgramService: RehabProgramService = inject(RehabProgramService);
    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private addedProgramFormsResults: ProgramFormResult[] = [];
    private addedModulesFormsResults: ModuleFormResult[] = [];
    private subscription: Subscription = new Subscription();

    programFormsResults: ProgramFormResult[] = [];
    modulesFormsResults: ModuleFormResult[] = [];

    rehabProgram: RehabProgram;
    isLoaded: boolean = false;

    protocolForm = new FormGroup({
        result: new FormControl("", {
                nonNullable: true,
                validators: [Validators.required]
            }
        ),
        diagnosis: new FormControl("", {
                nonNullable: true,
                validators: [Validators.required]
            }
        ),
        recommendations: new FormControl("", {
                nonNullable: true,
                validators: [Validators.required]
            }
        ),
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

    fetchProgramFormResults(programId: number) {
        let ids: number[] = [];
        for (const addedResult of this.addedProgramFormsResults) {
            ids.push(addedResult.id);
        }
        if (ids.length === 0) {
            ids.push(-1);
        }
        this.subscription.add(this.rehabProgramService.getProgramFormsResults(programId, ids).subscribe(
            programFormResults => {
                this.programFormsResults = programFormResults;
            }
        ))
    }

    fetchModulesFormsResults(programId: number) {
        let ids: number[] = [];
        for (const addedResult of this.addedModulesFormsResults) {
            ids.push(addedResult.id);
        }
        if (ids.length === 0) {
            ids.push(-1);
        }
        this.subscription.add(this.rehabProgramService.getModulesFormsResults(programId, ids).subscribe(
            modulesFormsResults => {
                this.modulesFormsResults = modulesFormsResults;
            }
        ));
    }

    openAddScalesDialog(content: PolymorpheusContent<TuiDialogContext>) {
        this.fetchProgramFormResults(this.rehabProgram.id);
        this.fetchModulesFormsResults(this.rehabProgram.id);
        this.dialogService.open(content).subscribe()
    }

    openConfirmProtocolCreationDialog(content: PolymorpheusContent<TuiDialogContext>) {
        console.log(this.protocolForm.valid)
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


    showModuleFormResult(resultId: number, formId: number) {
        const sub$ = this.dialogService.open<void>(
            new PolymorpheusComponent(FormResultsDialogComponent, this.injector),
            {
                data: {
                    id: resultId,
                    formId: formId,
                    isProgramForm: false
                },
                closeable: true,
                size: 'auto'
            }
        ).subscribe();
        this.subscription.add(sub$);
    }

    addProgramFormResult(result: ProgramFormResult) {
        this.addedProgramFormsResults.push(result);
        const index = this.programFormsResults.indexOf(result);
        if (index !== -1) {
            this.programFormsResults.splice(index, 1);
        }
        let formControlValue: string[] = []
        formControlValue.push("Анкета: " + result.form.name + ". Шкала: " + result.form.scale);
        formControlValue.push("Количество баллов: " + result.score + ". Результат: " + result.interpretation);
        formControlValue.push("Тип " + (result.typeId === 1 ? "Входная анкета" : "Выходная акнета"))
        formControlValue.push("Дата прохождения: " + new Date(result.finishedAt));
        this.programScales.push(new FormControl(formControlValue.join("\n")));
    }

    addModulesFormResult(result: ModuleFormResult) {
        this.addedModulesFormsResults.push(result);
        const index = this.modulesFormsResults.indexOf(result);
        if (index !== -1) {
            this.modulesFormsResults.splice(index, 1);
        }
        let formControlValue: string[] = []
        formControlValue.push("Анкета: " + result.form.name + ". Шкала: " + result.form.scale);
        formControlValue.push("Количество баллов: " + result.score + ". Результат: " + result.interpretation);
        formControlValue.push("Модуль: " + result.moduleName)
        formControlValue.push("Дата прохождения: " + new Date(result.finishedAt));
        this.modulesScales.push(new FormControl(formControlValue.join("\n")));
    }

    createProtocol() {
        let request = new CreateProtocolRequest(
            this.modulesScales.value.join("\n"),
            this.programScales.value.join("\n"),
            this.protocolForm.get("result")!.value,
            this.protocolForm.get("recommendations")!.value,
            this.protocolForm.get("diagnosis")!.value
        )
        console.log(request);
        this.rehabProgramService.createProtocol(
            this.rehabProgram.id,
            request
        ).subscribe()
    }

}
