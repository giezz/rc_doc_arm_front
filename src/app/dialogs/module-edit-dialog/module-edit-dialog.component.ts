import {Component, inject, Inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent, PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {Module} from "../../models/module";
import {ModuleService} from "../../services/module.service";
import {Subscription} from "rxjs";
import {AddFormDialogComponent} from "../add-form-dialog/add-form-dialog.component";
import {AddExerciseDialogComponent} from "../add-exercise-dialog/add-exercise-dialog.component";

@Component({
  selector: 'app-module-edit-dialog',
  templateUrl: './module-edit-dialog.component.html',
  styleUrls: ['./module-edit-dialog.component.css', '../../app.component.css']
})
export class ModuleEditDialogComponent implements OnInit, OnDestroy {

  private moduleService: ModuleService = inject(ModuleService);
  private dialogService = inject(TuiDialogService);
  private injector: Injector = inject(Injector);

  private readonly addFormDialog = this.dialogService.open<number>(
    new PolymorpheusComponent(AddFormDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Добавление анкеты',
      size: "auto"
    },
  );

  private readonly addExerciseDialog = this.dialogService.open<number>(
    new PolymorpheusComponent(AddExerciseDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Добавление Упражнения',
      size: "auto"
    },
  );

  module: Module;
  moduleName: string = "";

  subscription: Subscription = new Subscription();
  isLoaded: boolean = true;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<number, number>,
  ) {
  }

  ngOnInit(): void {
    console.log(this.data)
    console.log("ModuleEditDialogComponent");
    const sub$ = this.moduleService.getModuleById(this.data).subscribe(
      module => {
        this.module = module;
        this.isLoaded = false;
        console.log(this.module.forms);
      }
    )
    this.subscription.add(sub$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    console.log("ModuleEditDialogComponent destroyed");
  }

  get data(): number {
    return this.context.data
  }

  showAddFormDialog(moduleId: number) {
    const dialogSub$ = this.addFormDialog.subscribe(
      {
        next: formId => {
            this.addForm(moduleId, formId);
        },
        complete: () => {
          console.info('Dialog closed');
        },
      }
    );
    this.subscription.add(dialogSub$);
  }

  showAddExerciseDialog(moduleId: number, blockId: number) {
    const dialogSub$ = this.addExerciseDialog.subscribe(
      {
        next: exerciseId => {
            this.addExercise(moduleId, exerciseId, blockId)
        },
        complete: () => {
          console.info('Dialog closed');
        },
      }
    );
    this.subscription.add(dialogSub$);
  }

  showRenameModuleDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogService.open(content).subscribe();
  }

  addForm(moduleId: number, formId: number) {
      const moduleSub$ = this.moduleService.addForm(moduleId, formId).subscribe(
          module => {
              this.module = module;
          }
      )
      this.subscription.add(moduleSub$);
  }

  deleteFrom(moduleId: number, formId: number) {
    const sub$ = this.moduleService.deleteFrom(moduleId, formId).subscribe(
      module => {
        this.module = module;
      }
    );
    this.subscription.add(sub$);
  }

  addExercise(moduleId: number, exerciseId: number, blockId: number) {
      const moduleSub$ = this.moduleService.addExercise(moduleId, exerciseId, blockId).subscribe(
          module => {
              this.module = module;
          }
      )
      this.subscription.add(moduleSub$);
  }

  deleteExercise(moduleId: number, exerciseId: number) {
    const sub$ = this.moduleService.deleteExercise(moduleId, exerciseId).subscribe(
      module => {
        this.module = module;
      }
    );
    this.subscription.add(sub$);
  }

  renameModule() {
    const sub$ = this.moduleService.renameModule(this.module.id, this.moduleName).subscribe(
      module => {
        this.module = module;
      }
    );
    this.subscription.add(sub$);
  }
}
