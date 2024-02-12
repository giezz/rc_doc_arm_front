import {Component, inject, Injector, OnInit} from '@angular/core';
import {RehabProgram} from "../../../../../models/rehab-program";
import {ComponentsService} from "../../../../../services/components.service";
import {RehabProgramService} from "../../../../../services/rehab-program.service";
import {TuiAlertService, TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {SelectFormDialogComponent} from "../../../../../dialogs/select-form-dialog/select-form-dialog.component";


@Component({
  selector: 'app-rehab-detail',
  templateUrl: './rehab-detail.component.html',
  styleUrls: ['./rehab-detail.component.css', '../../patient.component.css']
})
export class RehabDetailComponent implements OnInit {

  private componentService: ComponentsService = inject(ComponentsService);
  private rehabProgramService: RehabProgramService = inject(RehabProgramService);
  private confirmActionDialog = inject(TuiDialogService);
  private injector: Injector = inject(Injector);

  private readonly formSelectionDialog = this.confirmActionDialog.open<number>(
    new PolymorpheusComponent(SelectFormDialogComponent, this.injector),
    {
      data: 237,
      dismissible: true,
      label: 'Добавление анкеты',
    },
  );


  rehabProgram: RehabProgram;
  hasProgram: boolean = false;

  ngOnInit(): void {
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

  showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.confirmActionDialog.open(content).subscribe();
  }

  addModule() {
    this.rehabProgramService.addModule("test", this.rehabProgram.id).subscribe(
      program => {
        this.rehabProgram = program;
      }
    )
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

  showAddFormDialog() {
    this.formSelectionDialog.subscribe({
      next: data => {
        console.info(`Dialog emitted data = ${data}`);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }
}
