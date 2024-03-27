import {Component, inject, Injector, Input} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";
import {Observable, Subscription} from "rxjs";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {FormResultsDialogComponent} from "../../../../dialogs/form-results-dialog/form-results-dialog.component";
import {ProgramFormResult} from "../../../../models/program-form-result";

@Component({
    selector: 'app-program-form-result',
    templateUrl: './program-form-result.component.html',
    styleUrls: ['./program-form-result.component.css']
})
export class ProgramFormResultComponent {
    @Input()
    result: ProgramFormResult;

    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private formResultDialog: Observable<void>;
    subscription: Subscription = new Subscription();

    ngOnInit() {

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showFormResultsDialog() {
        this.formResultDialog = this.dialogService.open<void>(
            new PolymorpheusComponent(FormResultsDialogComponent, this.injector),
            {
                data: {
                    id: this.result.id,
                    formId: this.result.form.id,
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
