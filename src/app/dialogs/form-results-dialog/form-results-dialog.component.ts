import {Component, Inject, inject, OnDestroy, OnInit} from '@angular/core';
import {FormService} from "../../services/form.service";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext} from "@taiga-ui/core";
import {ProgramForm} from "../../models/program-form";
import {ModuleForm} from "../../models/module-form";
import {Subscription} from "rxjs";
import {FormDetails} from "../../models/form-details";
import {Variant} from "../../models/variant";

@Component({
    selector: 'app-form-results-dialog',
    templateUrl: './form-results-dialog.component.html',
    styleUrls: ['./form-results-dialog.component.css']
})
export class FormResultsDialogComponent implements OnInit, OnDestroy {

    private formService: FormService = inject(FormService);

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<number, ModuleForm | ProgramForm>,
    ) {
    }

    isLoaded: boolean = false;
    formDetails: FormDetails;
    answeredVariants: Variant[] = [];
    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        console.log(typeof this.data);

        const detailsSub$ = this.formService.getDetails(this.data.form.id).subscribe(
            formDetails => {
                this.formDetails = formDetails;
                const resultsSub$ = this.formService.getModuleFormResults(this.data.id).subscribe(
                    variants => {
                        this.answeredVariants = variants;
                        this.isLoaded = true;
                    }
                )
                this.subscription.add(resultsSub$);
            }
        )
        this.subscription.add(detailsSub$);

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }


    get data() {
        return this.context.data;
    }

    isAnswered(variant: Variant): boolean {
        for (const answeredVariant of this.answeredVariants) {
            if (variant.id === answeredVariant.id) {
                return true;
            }
        }
        return false;
    }
}
