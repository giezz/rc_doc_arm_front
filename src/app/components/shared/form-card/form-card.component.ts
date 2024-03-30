import {Component, inject, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {Form} from "../../../models/form";
import {TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {FormPreviewDialogComponent} from "../../../dialogs/form-preview-dialog/form-preview-dialog.component";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-form-card',
    templateUrl: './form-card.component.html',
    styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit, OnDestroy {

    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private subscription: Subscription = new Subscription();

    @Input()
    form: Form;

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showFormDetailsDialog(formId: number) {
        this.subscription.add(
            this.dialogService.open<void>(
                new PolymorpheusComponent(FormPreviewDialogComponent, this.injector),
                {
                    data: formId,
                    dismissible: true,
                    closeable: true,
                    size: 'auto'
                }
            ).subscribe()
        );
    }
}
