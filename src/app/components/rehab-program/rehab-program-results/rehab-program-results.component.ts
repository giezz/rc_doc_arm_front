import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramComponentsService} from "../../../services/rehab-program-components.service";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {Subscription} from "rxjs";
import {ModuleForm} from "../../../models/module-form";

@Component({
    selector: 'app-rehab-program-results',
    templateUrl: './rehab-program-results.component.html',
    styleUrls: ['./rehab-program-results.component.css']
})
export class RehabProgramResultsComponent implements OnInit, OnDestroy {

    private rehabProgramComponentsService: RehabProgramComponentsService = inject(RehabProgramComponentsService);
    private rehabProgramService: RehabProgramService = inject(RehabProgramService);

    moduleForms: ModuleForm[];
    isLoaded: boolean = false;
    hasResults: boolean = false;
    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        this.getProgramResults();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getProgramResults() {
        const sub$ = this.rehabProgramComponentsService.program$.subscribe(
            {
                next: program => {
                    if (program != null) {
                        this.getResults(program.id);
                    } else {
                        // TODO: when no rehab
                    }
                }
            }
        )
        this.subscription.add(sub$);
    }

    getResults(programId: number) {
        const sub$ = this.rehabProgramService.getResults(programId).subscribe(
            {
                next: results => {
                    this.moduleForms = results;
                    this.isLoaded = true;
                    this.hasResults = true;
                },
                error: err => {
                    this.hasResults = false;
                    this.isLoaded = true;
                }
            }
        )
        this.subscription.add(sub$);
    }

}
