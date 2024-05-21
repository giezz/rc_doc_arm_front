import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramComponentsService} from "../../../services/components/rehab-program-components.service";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {Subscription} from "rxjs";
import {ModuleFormResult} from "../../../models/module-form-result";
import {ProgramFormResult} from "../../../models/program-form-result";

@Component({
    selector: 'app-rehab-program-results',
    templateUrl: './rehab-program-results.component.html',
    styleUrls: ['./rehab-program-results.component.css']
})
export class RehabProgramResultsComponent implements OnInit, OnDestroy {

    private rehabProgramComponentsService: RehabProgramComponentsService = inject(RehabProgramComponentsService);
    private rehabProgramService: RehabProgramService = inject(RehabProgramService);

    modulesFormsResults: ModuleFormResult[] = [];
    programFormsResults: ProgramFormResult[] = [];
    isModulesResultsLoaded: boolean = false;
    isProgramResultsLoaded: boolean = false;
    hasModulesResults: boolean = false;
    hasProgramResults: boolean = false;
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
                        this.getModulesFormsResults(program.id);
                        this.getProgramFormResults(program.id);
                    } else {
                        // TODO: when no rehab
                    }
                }
            }
        )
        this.subscription.add(sub$);
    }

    getModulesFormsResults(programId: number) {
        const sub$ = this.rehabProgramService.getModulesFormsResults(programId, [-1]).subscribe(
            {
                next: results => {
                    if (results.length != 0) {
                        this.modulesFormsResults = results;
                        this.isModulesResultsLoaded = true;
                        this.hasModulesResults = true;
                    } else {
                        this.hasModulesResults = false;
                        this.isModulesResultsLoaded = true;
                    }
                },
                error: err => {
                    this.hasModulesResults = false;
                    this.isModulesResultsLoaded = true;
                }
            }
        )
        this.subscription.add(sub$);
    }

    getProgramFormResults(programId: number) {
        const sub$ = this.rehabProgramService.getProgramFormsResults(programId, [-1]).subscribe(
            {
                next: results => {
                    if (results.length != 0) {
                        this.programFormsResults = results;
                        this.isProgramResultsLoaded = true;
                        this.hasProgramResults = true;
                    } else {
                        this.hasProgramResults = false;
                        this.isProgramResultsLoaded = true;
                    }
                },
                error: err => {
                    this.hasProgramResults = false;
                    this.isProgramResultsLoaded = true;
                }
            }
        )
        this.subscription.add(sub$);
    }

}
