import {Component, Inject, inject, OnDestroy, OnInit} from '@angular/core';
import {FormService} from "../../services/form.service";
import {Subscription} from "rxjs";
import {RehabProgramService} from "../../services/rehab-program.service";
import {RehabProgramComponentsService} from "../../services/components/rehab-program-components.service";
import {ProgramForm} from "../../models/program-form";
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext} from "@taiga-ui/core";

@Component({
    selector: 'app-protocol-result-add-dialog',
    templateUrl: './protocol-add-result-dialog.component.html',
    styleUrls: ['./protocol-add-result-dialog.component.css']
})
export class ProtocolAddResultDialog implements OnInit, OnDestroy {

    private rehabProgramService: RehabProgramService = inject(RehabProgramService);
    private rehabProgramComponentsService: RehabProgramComponentsService = inject(RehabProgramComponentsService);

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<ProgramForm, ProgramForm[]>,
    ) {}

    programForms: ProgramForm[] = [];

    isLoaded: boolean = true;
    subscription: Subscription = new Subscription();

    ngOnInit() {
        this.programForms = this.data;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    get data() {
        return this.context.data
    }

    addResult(programForm: ProgramForm) {
        this.context.$implicit.next(programForm);
        const index = this.programForms.indexOf(programForm, 0);
        if (index > -1) {
            this.programForms.splice(index, 1);
        }
    }
}
