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
        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<ProgramForm>,
    ) {}

    programForms: ProgramForm[] = [];

    isLoaded: boolean = true;
    subscription: Subscription = new Subscription();

    ngOnInit() {
        const sub$ = this.rehabProgramComponentsService.program$.subscribe(
            {
                next: program => {
                    if (program != null) {
                        this.getResults(program.id);
                    }
                }
            }
        );
        this.subscription.add(sub$);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getResults(programId: number) {
        const sub$ = this.rehabProgramService.getResults(programId).subscribe(
            programForms => {
                this.programForms = programForms;
                this.isLoaded = true;
            }
        );
        this.subscription.add(sub$);
    }

    addResult(programForm: ProgramForm) {
        this.context.$implicit.next(programForm);
    }
}
