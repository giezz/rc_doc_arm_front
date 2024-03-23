import {Component, Inject, inject, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {ModuleForm} from "../../../../models/module-form";
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {FormResultsDialogComponent} from "../../../../dialogs/form-results-dialog/form-results-dialog.component";
import {Observable, Subscription} from "rxjs";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";

@Component({
    selector: 'app-result-detail-single',
    templateUrl: './result-detail-single.component.html',
    styleUrls: ['./result-detail-single.component.css']
})
export class ResultDetailSingleComponent implements OnInit, OnDestroy {

    @Input()
    moduleForm: ModuleForm;

    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private formResultDialog: Observable<void>;
    subscription: Subscription = new Subscription();

    ngOnInit() {
        this.formResultDialog = this.dialogService.open<void>(
            new PolymorpheusComponent(FormResultsDialogComponent, this.injector),
            {
                data: this.moduleForm,
                closeable: true,
                size: 'auto'
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showFormResultsDialog() {
        const sub$ = this.formResultDialog.subscribe()
        this.subscription.add(sub$);
    }
}
