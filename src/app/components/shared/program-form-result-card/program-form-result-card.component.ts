import {Component, inject, Injector, Input, OnDestroy} from '@angular/core';
import {ProgramFormResult} from "../../../models/program-form-result";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {FormResultsDialogComponent} from "../../../dialogs/form-results-dialog/form-results-dialog.component";
import {TuiDialogService} from "@taiga-ui/core";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-form-result-card',
    templateUrl: './program-form-result-card.component.html',
    styleUrls: ['./program-form-result-card.component.css']
})
export class ProgramFormResultCardComponent implements OnDestroy {

    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    private subscription: Subscription = new Subscription();

    @Input()
    formResult: ProgramFormResult;

    showProgramFormResult(resultId: number, formId: number) {
        this.subscription.add(this.dialogService.open<void>(
            new PolymorpheusComponent(FormResultsDialogComponent, this.injector),
            {
                data: {
                    id: resultId,
                    formId: formId,
                    isProgramForm: true
                },
                closeable: true,
                size: 'auto'
            }
        ).subscribe())
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
