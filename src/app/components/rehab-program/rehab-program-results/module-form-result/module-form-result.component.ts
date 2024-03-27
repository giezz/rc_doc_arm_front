import {Component, inject, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {FormResultsDialogComponent} from "../../../../dialogs/form-results-dialog/form-results-dialog.component";
import {Observable, Subscription} from "rxjs";
import {TuiDialogService} from "@taiga-ui/core";
import {ModuleFormResult} from "../../../../models/module-form-result";

@Component({
    selector: 'app-module-form-result',
    templateUrl: './module-form-result.component.html',
    styleUrls: ['./module-form-result.component.css']
})
export class ModuleFormResultComponent implements OnInit, OnDestroy {

    @Input()
    result: ModuleFormResult;

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
                    isProgramForm: false
                },
                closeable: true,
                size: 'auto'
            }
        );
        const sub$ = this.formResultDialog.subscribe()
        this.subscription.add(sub$);
    }

}
