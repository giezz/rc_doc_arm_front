import {ChangeDetectionStrategy, Component, inject, Inject, OnInit, TemplateRef} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {Form} from "../../models/form";
import {FormService} from "../../services/form.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-select-form-dialog',
  templateUrl: './add-form-dialog.component.html',
  styleUrls: ['./add-form-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFormDialogComponent implements OnInit {

  private readonly formService: FormService = inject(FormService);

  forms$: Observable<Form[]>;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>,
  ) {
  }

  ngOnInit(): void {
    this.forms$ = this.formService.getAll()
  }

  addForm(formId: number): void {
    this.context.completeWith(formId);
  }
}
