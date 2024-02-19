import {ChangeDetectionStrategy, Component, inject, Inject, OnInit, TemplateRef} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {Form} from "../../models/form";
import {FormService} from "../../services/form.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-select-form-dialog',
  templateUrl: './select-form-dialog.component.html',
  styleUrls: ['./select-form-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFormDialogComponent implements OnInit {

  forms$: Observable<Form[]>;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>,
  ) {
  }

  private readonly formService: FormService = inject(FormService);

  ngOnInit(): void {
    this.forms$ = this.formService.getAll()
  }

  addForm(formId: number): void {
    this.context.completeWith(formId);
  }
}
