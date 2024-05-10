import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialogContext} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-select-form-dialog',
  templateUrl: './add-form-dialog.component.html',
  styleUrls: ['./add-form-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFormDialogComponent {

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>,
  ) {
  }

  addForm(formId: number): void {
    this.context.completeWith(formId);
  }
}
