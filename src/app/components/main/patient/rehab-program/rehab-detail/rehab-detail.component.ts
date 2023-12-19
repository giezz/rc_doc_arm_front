import {Component, inject, OnInit} from '@angular/core';
import {RehabProgram} from "../../../../../models/rehab-program";
import {ComponentsService} from "../../../../../services/components.service";
import {RehabProgramService} from "../../../../../services/rehab-program.service";
import {TuiAlertService, TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';


@Component({
  selector: 'app-rehab-detail',
  templateUrl: './rehab-detail.component.html',
  styleUrls: ['./rehab-detail.component.css']
})
export class RehabDetailComponent implements OnInit {

  componentService: ComponentsService = inject(ComponentsService);
  rehabProgramService: RehabProgramService = inject(RehabProgramService);
  dialogs = inject(TuiDialogService)

  rehabProgram: RehabProgram;
  hasProgram: boolean = false;

  ngOnInit(): void {
    this.componentService.getRehabProgram().subscribe(
      program => {
        if (program != null) {
          this.hasProgram = true
          this.rehabProgram = program
        }
      },
      error => {
        if (error.error.code === 404) {
          this.hasProgram = false
        }
      }
    )
  }

  showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs.open(content).subscribe();
  }

  createRehabProgram() {
    // this.rehabProgram = new RehabProgram()
    this.hasProgram = true
  }
}
