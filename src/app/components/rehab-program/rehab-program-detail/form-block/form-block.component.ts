import {Component, inject, Injector, Input, OnDestroy} from '@angular/core';
import {Form} from "../../../../models/form";
import {ProgramForm} from "../../../../models/program-form";
import {TuiDialogService} from "@taiga-ui/core";
import {Observable, Subscription} from "rxjs";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {FormPreviewDialogComponent} from "../../../../dialogs/form-preview-dialog/form-preview-dialog.component";
import {ModuleForm} from "../../../../models/module-form";
import {FormResultsDialogComponent} from "../../../../dialogs/form-results-dialog/form-results-dialog.component";

@Component({
    selector: 'app-form-block',
    templateUrl: './form-block.component.html',
    styleUrls: ['./form-block.component.css']
})
export class FormBlockComponent implements OnDestroy {
    @Input("form")
    programForm: ProgramForm;

    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private formPreviewDialog: Observable<void>;
    private formResultDialog: Observable<void>;

    subscription: Subscription = new Subscription();

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    showFormDetailsDialog(formId: number) {
        this.formPreviewDialog = this.dialogService.open<void>(
            new PolymorpheusComponent(FormPreviewDialogComponent, this.injector),
            {
                data: formId,
                dismissible: true,
                closeable: true,
                size: 'auto'
            }
        );
        const sub$ = this.formPreviewDialog.subscribe();
        this.subscription.add(sub$);
    }

    showFormResultsDialog(programForm: ProgramForm) {
        const id = programForm.id;
        const formId = programForm.form.id
        this.formResultDialog = this.dialogService.open<void>(
            new PolymorpheusComponent(FormResultsDialogComponent, this.injector),
            {
                data: {
                    id: id,
                    formId: formId,
                    isProgramForm: true
                },
                closeable: true,
                size: 'auto'
            }
        );
        const sub$ = this.formResultDialog.subscribe()
        this.subscription.add(sub$);
    }
}
