import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramService} from "../../../services/rehab-program.service";
import {ComponentsService} from "../../../services/components.service";
import {RehabProgram} from "../../../models/rehab-program";
import {Observable, of, Subscription} from "rxjs";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {SelectFormDialogComponent} from "../../../dialogs/select-form-dialog/select-form-dialog.component";
import {AddModuleDialogComponent} from "../../../dialogs/add-module-dialog/add-module-dialog.component";
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiSizeXL} from "@taiga-ui/core/types/size";

@Component({
  selector: 'app-rehab-program-detail',
  templateUrl: './rehab-program-detail.component.html',
  styleUrls: ['./rehab-program-detail.component.css', '../../../app.component.css']
})
export class RehabProgramDetailComponent implements OnInit, OnDestroy {

  private componentsService: ComponentsService = inject(ComponentsService);
  private rehabProgramService: RehabProgramService = inject(RehabProgramService);
  private dialogService = inject(TuiDialogService);
  private injector: Injector = inject(Injector);

  private readonly formSelectionDialog = this.dialogService.open<number>(
    new PolymorpheusComponent(SelectFormDialogComponent, this.injector),
    {
      data: 237,
      dismissible: true,
      label: 'Добавление анкеты',
      size: "auto"
    },
  );

  private readonly addModuleDialog = this.dialogService.open<string>(
    new PolymorpheusComponent(AddModuleDialogComponent, this.injector),
    {
      data: "ef",
      dismissible: true,
      label: 'Добавление модуля',
    },
  );

  subscription: Subscription = new Subscription();

  rehabProgram: RehabProgram;

  isLoaded: boolean = true;
  hasProgram: boolean = false;

  ngOnInit(): void {
    console.log('RehabProgramDetailComponent');
    const sub$ = this.componentsService.getRehabProgram().subscribe(
      {
        next: program => {
          this.rehabProgram = program;
          console.log(program);
          this.hasProgram = true;
          this.isLoaded = false;
        },
        error: err => {
          console.log(err.message)
          this.hasProgram = false
          this.isLoaded = false;
        }
      }
    )
    this.subscription.add(sub$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('RehabProgramDetailComponent destroyed');
  }

  createRehabProgram() {
    const patientSub$ = this.componentsService.getPatient().subscribe(
      patient => {
        const rehabSub$ = this.rehabProgramService.create(patient.id).subscribe(
          program => {
            this.rehabProgram = program;
          }
        );
        this.subscription.add(rehabSub$);
      }
    );
    this.subscription.add(patientSub$);
  }

  showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogService.open(content).subscribe();
  }

  showAddModuleDialog() {
    const dialogSub$ = this.addModuleDialog.subscribe({
        next: name => {
          console.info(`module name = ${name}`);
          const programSub$ = this.rehabProgramService.addModule(name, this.rehabProgram.id).subscribe(
            program => {
              this.rehabProgram = program;
            }
          )
          this.subscription.add(programSub$);
        },
        complete: () => {
          console.info('Dialog closed');
        },
      }
    )
    this.subscription.add(dialogSub$);
  }

  showAddFormDialog(formType: string) {
    const dialogSub$ = this.formSelectionDialog.subscribe({
        next: formId => {
          console.info(`form id = ${formId}`);
          const rehabSub$ = this.rehabProgramService.addForm(
            this.rehabProgram.id,
            formId,
            formType
          ).subscribe(
            program => {
              this.rehabProgram = program;
            }
          )
          this.subscription.add(rehabSub$);
        },
        complete: () => {
          console.info('Dialog closed');
        },
      }
    );
    this.subscription.add(dialogSub$);
  }
}
