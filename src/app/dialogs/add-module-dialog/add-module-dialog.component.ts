import {Component, inject, Inject} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {RehabProgramService} from "../../services/rehab-program.service";

@Component({
  selector: 'app-add-module-dialog',
  templateUrl: './add-module-dialog.component.html',
  styleUrls: ['./add-module-dialog.component.css']
})
export class AddModuleDialogComponent {

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<string, string>,
  ) {
  }

  rehabProgramService: RehabProgramService = inject(RehabProgramService);

  name: string = "";

  addModule(): void {
    this.context.completeWith(this.name);
  }
}
