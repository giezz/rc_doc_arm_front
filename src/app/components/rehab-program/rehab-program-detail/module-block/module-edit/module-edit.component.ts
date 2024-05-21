import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {Module} from "../../../../../models/module";
import {ModuleService} from "../../../../../services/module.service";
import {Subscription} from "rxjs";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {Form} from "../../../../../models/form";
import {ModuleExercise} from "../../../../../models/module-exercise";
import {ModuleForm} from "../../../../../models/module-form";
import {Exercise} from "../../../../../models/exercise";

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

    private subscription: Subscription = new Subscription();
    isLoaded: boolean = false;

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
                    this.moduleExercises = module.exercises;
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
        this.subscription.add(this.moduleService.addForm(this.module.id, form.id).subscribe(
            {
                next: module => {
                    this.moduleForms = module.forms;
                    this.moduleExercises = module.exercises;
                }
            }
        ));
    }

    deleteForm(form: ModuleForm) {
        this.subscription.add(this.moduleService.deleteFrom(this.module.id, form.id).subscribe(
            {
                next: module => {
                    this.moduleForms = module.forms;
                    this.moduleExercises = module.exercises;
                }
            }
        ));
    }

    addExercise(exercise: Exercise, blockId: number) {
        this.subscription.add(this.moduleService.addExercise(this.module.id, exercise.id, blockId).subscribe(
            {
                next: module => {
                    this.moduleForms = module.forms;
                    this.moduleExercises = module.exercises;
                }
            }
        ))
    }

    deleteExercise(exercise: ModuleExercise) {
        this.subscription.add(this.moduleService.deleteExercise(this.module.id, exercise.id).subscribe(
            {
                next: module => {
                    this.moduleForms = module.forms;
                    this.moduleExercises = module.exercises;
                }
            }
        ))
    }

    protected readonly encodeURI = encodeURI;
}
