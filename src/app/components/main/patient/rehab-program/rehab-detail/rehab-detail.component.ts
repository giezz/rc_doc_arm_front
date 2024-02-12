import {Component, inject, Injector, OnInit} from '@angular/core';
import {RehabProgram} from "../../../../../models/rehab-program";
import {ComponentsService} from "../../../../../services/components.service";
import {RehabProgramService} from "../../../../../services/rehab-program.service";
import {TuiAlertService, TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {SelectFormDialogComponent} from "../../../../../dialogs/select-form-dialog/select-form-dialog.component";
import {AddModuleDialogComponent} from "../../../../../dialogs/add-module-dialog/add-module-dialog.component";


@Component({
  selector: 'app-rehab-detail',
  templateUrl: './rehab-detail.component.html',
  styleUrls: ['./rehab-detail.component.css', '../../patient.component.css']
})
export class RehabDetailComponent implements OnInit {

  private componentService: ComponentsService = inject(ComponentsService);
  private rehabProgramService: RehabProgramService = inject(RehabProgramService);
  private dialogService = inject(TuiDialogService);
  private injector: Injector = inject(Injector);

  private readonly formSelectionDialog = this.dialogService.open<number>(
    new PolymorpheusComponent(SelectFormDialogComponent, this.injector),
    {
      data: 237,
      dismissible: true,
      label: 'Добавление анкеты',
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

  rehabProgram: RehabProgram;
  hasProgram: boolean = false;


  constructor() {
    this.componentService.patient$.subscribe(
      patient => {
        this.rehabProgramService.getCurrent(patient)
          .subscribe(program => {
              console.log(program);
              if (program) {
                this.rehabProgram = program;
                this.hasProgram = true;
              }
            }
          )
      }
    )
  }

  ngOnInit(): void {

  }

  showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogService.open(content).subscribe();
  }

  addModule() {
    this.addModuleDialog.subscribe({
      next: name => {
        console.info(`module name = ${name}`);
        this.rehabProgramService.addModule(name, this.rehabProgram.id).subscribe(
          program => {
            this.rehabProgram = program;
          }
        )
      },
      complete: () => {
        console.info('Dialog closed');
      },
    })
  }

  createRehabProgram() {
    this.componentService.patient$.subscribe(
      patient => {
        this.rehabProgramService.create(patient.id).subscribe(
          program => {
            this.rehabProgram = program;
            this.hasProgram = true;
          }
        )
      }
    )
  }

  showAddFormDialog(formType: string) {
    this.formSelectionDialog.subscribe({
      next: formId => {
        console.info(`form id = ${formId}`);
        this.rehabProgramService.addForm(
          this.rehabProgram.id,
          formId,
          formType
        ).subscribe(program => this.rehabProgram = program)
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }
}
