import {Component, EventEmitter, inject, Injector, Input, OnDestroy, Output} from '@angular/core';
import {ProgramForm} from "../../../../models/program-form";
import {TuiDialogService} from "@taiga-ui/core";
import {Subscription} from "rxjs";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {FormResultsDialogComponent} from "../../../../dialogs/form-results-dialog/form-results-dialog.component";

@Component({
    selector: 'app-form-block',
    templateUrl: './form-block.component.html',
    styleUrls: ['./form-block.component.css']
})
export class FormBlockComponent implements OnDestroy {

    @Input("form")
    programForm: ProgramForm;

    @Input()
    isProgramCompleted: boolean = true;

    @Output()
    onDeleteButtonPressed = new EventEmitter<number>();

    deleteButtonPressed(programFormId: number) {
        this.onDeleteButtonPressed.emit(programFormId);
    }

    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);

    subscription: Subscription = new Subscription();

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    showFormResultsDialog(programForm: ProgramForm) {
        const id = programForm.id;
        const formId = programForm.form.id
        this.subscription.add(this.dialogService.open<void>(
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
            ).subscribe()
        );
    }

}
