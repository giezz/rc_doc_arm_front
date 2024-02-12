import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-select-form-dialog',
  templateUrl: './select-form-dialog.component.html',
  styleUrls: ['./select-form-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFormDialogComponent {

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>,
  ) {
  }




}
