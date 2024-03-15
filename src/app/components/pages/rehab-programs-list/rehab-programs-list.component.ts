import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";

@Component({
    selector: 'app-my-patients',
    templateUrl: './rehab-programs-list.component.html',
    styleUrls: ['./rehab-programs-list.component.css']
})
export class RehabProgramsListComponent implements OnInit, OnDestroy {

    private rehabProgramService: RehabProgramService = inject(RehabProgramService);

    rehabPrograms: RehabProgram[];
    subscription: Subscription = new Subscription();

    ngOnInit() {
        const sub$ = this.rehabProgramService.getListByCurrentDoctor().subscribe(
            {
                next: programs => {
                    this.rehabPrograms = programs;
                }
            }
        );
        this.subscription.add(sub$);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
