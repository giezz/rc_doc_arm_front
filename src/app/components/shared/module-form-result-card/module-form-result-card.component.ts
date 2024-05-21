import {Component, inject, Injector, Input} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";
import {Subscription} from "rxjs";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {FormResultsDialogComponent} from "../../../dialogs/form-results-dialog/form-results-dialog.component";
import {ModuleFormResult} from "../../../models/module-form-result";

@Component({
    selector: 'app-module-form-result-card',
    templateUrl: './module-form-result-card.component.html',
    styleUrls: ['./module-form-result-card.component.css']
})
export class ModuleFormResultCardComponent {

    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private subscription: Subscription = new Subscription();

    @Input()
    formResult: ModuleFormResult;

    showModuleFormResult(resultId: number, formId: number) {
        this.subscription.add(this.dialogService.open<void>(
            new PolymorpheusComponent(FormResultsDialogComponent, this.injector),
            {
                data: {
                    id: resultId,
                    formId: formId,
                    isProgramForm: false
                },
                closeable: true,
                size: 'auto'
            }
        ).subscribe())
    }

}
