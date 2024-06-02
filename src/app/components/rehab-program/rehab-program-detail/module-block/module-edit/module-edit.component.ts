import {Component, inject, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {Module} from "../../../../../models/module";
import {ModuleService} from "../../../../../services/module.service";
import {Subscription} from "rxjs";
import {TuiAlertService, TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent, PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {Form} from "../../../../../models/form";
import {ModuleExercise} from "../../../../../models/module-exercise";
import {ModuleForm} from "../../../../../models/module-form";
import {Exercise} from "../../../../../models/exercise";
import {FormControl, FormGroup} from "@angular/forms";
import {FormResultsDialogComponent} from "../../../../../dialogs/form-results-dialog/form-results-dialog.component";

@Component({
    selector: 'app-module-edit',
    templateUrl: './module-edit.component.html',
    styleUrls: ['./module-edit.component.css']
})
export class ModuleEditComponent implements OnInit, OnDestroy {

    @Input()
    previewMode: boolean = false;

    @Input()
    module: Module;

    moduleExercises: ModuleExercise[] = [];
    moduleForms: ModuleForm[] = []

    private moduleService: ModuleService = inject(ModuleService);
    private dialogService: TuiDialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);
    private alerts: TuiAlertService = inject(TuiAlertService);

    private subscription: Subscription = new Subscription();
    isLoaded: boolean = false;

    form = new FormGroup({
        exercises: new FormControl(this.moduleExercises),
        forms: new FormControl(this.moduleForms)
    });

    ngOnInit(): void {
        this.loadModule(this.module.id);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    loadModule(moduleId: number) {
        this.subscription.add(this.moduleService.getModuleById(moduleId).subscribe(
            {
                next: module => {
                    this.moduleForms = module.forms;
                    this.moduleExercises = module.exercises
                    this.form.controls.forms.setValue(this.moduleForms);
                    this.form.controls.exercises.setValue(this.moduleExercises);
                    this.isLoaded = true;
                }
            }
        ))
    }

    openAddFormDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.subscription.add(this.dialogService.open(content).subscribe());
    }

    openAddExerciseDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.subscription.add(this.dialogService.open(content).subscribe());
    }

    addForm(form: Form) {
        this.moduleForms.push(new ModuleForm(
            null,
            form,
            null
        ));
    }

    deleteForm(mf: ModuleForm) {
        const index = this.moduleForms.indexOf(mf, 0);
        if (index > -1) {
            this.moduleForms.splice(index, 1);
        }
    }

    addExercise(exercise: Exercise, blockId: number) {
        this.moduleExercises.push(new ModuleExercise(
            null,
            exercise,
            blockId,
            null
        ));
    }

    deleteExercise(me: ModuleExercise) {
        const index = this.moduleExercises.indexOf(me, 0);
        if (index > -1) {
            this.moduleExercises.splice(index, 1);
        }
    }

    convertExercises(exercises: ModuleExercise[]) {
        return exercises.map(
            me => (
                {
                    id: me.id,
                    exercise: {
                        id: me.exercise.id
                    },
                    blockId: me.blockId
                }
            )
        )
    }

    convertForms(forms: ModuleForm[]) {
        return forms.map(
            mf => (
                {
                    id: mf.id,
                    form: {
                        id: mf.form.id
                    }
                }
            )
        )
    }

    updateModule() {
        let module: Module = new Module();
        module.name = this.module.name
        module.exercises = this.moduleExercises;
        module.forms = this.moduleForms;
        this.subscription.add(this.moduleService.updateModule(this.module.id, module).subscribe(
            {
                next: module => {
                    this.showNotification("success");
                    this.moduleForms = module.forms;
                    this.moduleExercises = module.exercises
                    this.form.controls.forms.setValue(this.moduleForms);
                    this.form.controls.exercises.setValue(this.moduleExercises);
                },
                error: () => {
                    this.showNotification("fail");
                }
            }
        ));
    }

    showNotification(type: "success" | "fail") {
        switch (type) {
            case "success":
                this.subscription.add(
                    this.alerts.open("Модуль обновлен").subscribe()
                )
                break;
            case "fail":
                this.subscription.add(
                    this.alerts.open("Ошибка", {status: "error"}).subscribe()
                )
                break;
        }
    }

    showModuleFormResult(resultId: number, formId: number) {
        this.subscription.add(this.dialogService.open<void>(
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
        ).subscribe())
    }
}
