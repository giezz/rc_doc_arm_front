import {Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ProgramFormResult} from "../../../../models/program-form-result";
import {ModuleFormResult} from "../../../../models/module-form-result";
import {Observable, Subscription} from "rxjs";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {IcfCategory} from "../../../../models/icf-category";
import {CreateProtocolRequest} from "../../../../models/request/create-protocol-request";
import {RehabProgramService} from "../../../../services/rehab-program.service";
import {DatePipe} from "@angular/common";
import {RehabProgram} from "../../../../models/rehab-program";
import {Protocol} from "../../../../models/protocol";
import {PatientService} from "../../../../services/patient.service";
import {RehabProgramComponentsService} from "../../../../services/components/rehab-program-components.service";

@Component({
  selector: 'app-create-protocol-dialog',
  templateUrl: './create-protocol-dialog.component.html',
  styleUrls: ['./create-protocol-dialog.component.css']
})
export class CreateProtocolDialogComponent implements OnInit, OnDestroy {

    @Input()
    rehabProgram: RehabProgram;

    @Output()
    protocols = new EventEmitter<CreateProtocolRequest>();
    onCreateProtocolButtonPressed() {
        let request = new CreateProtocolRequest(
            this.modulesScales.value.join("\n"),
            this.programScales.value.join("\n"),
            this.protocolForm.get("result")!.value,
            this.protocolForm.get("recommendations")!.value,
            this.protocolForm.get("diagnosis")!.value.join("\n"),
            this.protocolForm.get("isFinal")!.value!
        );

        return this.protocols.emit(request)
    }

    private rehabProgramService: RehabProgramService = inject(RehabProgramService);
    private dialogService = inject(TuiDialogService);
    private datePipe: DatePipe = inject(DatePipe);

    private addedProgramFormsResults: ProgramFormResult[] = [];
    private addedModulesFormsResults: ModuleFormResult[] = [];
    private subscription: Subscription = new Subscription();

    rehabResultItems = [
        "Продолжение реабилитационных мероприятий",
        "Выздоровление",
        "Выявление ограничений к продолжению мероприятий по медицинской реабилитации",
        "Выбытие на постоянное проживание в другой субъект РФ",
        "Смерть"
    ]

    programFormsResults: ProgramFormResult[] = [];
    modulesFormsResults: ModuleFormResult[] = [];

    isLoaded: boolean = false;

    protocolForm = new FormGroup({
        result: new FormControl("", {
                nonNullable: true,
                validators: [Validators.required]
            }
        ),
        diagnosis: new FormControl([], {
                nonNullable: true
            }
        ),
        recommendations: new FormControl("", {
                nonNullable: true
            }
        ),
        isFinal: new FormControl(false),
        programScales: new FormArray([]),
        modulesScales: new FormArray([])
    })

    ngOnInit(): void {
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

    openAddIcfCategoryDialog(content: PolymorpheusContent<TuiDialogContext>) {
        this.dialogService.open(content, {size: "auto"}).subscribe()
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

    addCategoryResult($event: { category: IcfCategory; grade: string }) {
        // @ts-ignore
        this.protocolForm.controls.diagnosis.setValue([...this.protocolForm.value.diagnosis, $event.category.code + '.' + $event.grade])
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
        formControlValue.push("Дата прохождения: " + this.datePipe.transform(result.finishedAt));
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
        formControlValue.push("Дата прохождения: " + this.datePipe.transform(result.finishedAt));
        this.modulesScales.push(new FormControl(formControlValue.join("\n")));
    }

}
