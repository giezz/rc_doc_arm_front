import {Component, inject, Inject, OnDestroy, OnInit} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext} from "@taiga-ui/core";
import {FormService} from "../../services/form.service";
import {FormDetails} from "../../models/form-details";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-form-preview-dialog',
    templateUrl: './form-preview-dialog.component.html',
    styleUrls: ['./form-preview-dialog.component.css']
})
export class FormPreviewDialogComponent implements OnInit, OnDestroy {

    private formService: FormService = inject(FormService);

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<number, number>,
    ) {
    }

    formDetails: FormDetails;
    isLoaded: boolean = false;
    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        const sub$ = this.formService.getDetails(this.data).subscribe(
            formDetails => {
                this.formDetails = formDetails;
                this.isLoaded = true;
            }
        )
        this.subscription.add(sub$);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    get data() {
        return this.context.data;
    }

}
