import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";
import {FormControl, FormGroup} from "@angular/forms";
import {TuiDay} from "@taiga-ui/cdk";
import {TuiFormatDatePipe} from "@taiga-ui/core";

@Component({
    selector: 'app-my-patients',
    templateUrl: './rehab-programs-list.component.html',
    styleUrls: ['./rehab-programs-list.component.css', '../pages.component.css']
})
export class RehabProgramsListComponent implements OnInit, OnDestroy {

    private rehabProgramService: RehabProgramService = inject(RehabProgramService);

    rehabPrograms: RehabProgram[];
    subscription: Subscription = new Subscription();

    readonly items = ['Статус 1', 'Статус 2', 'Статус 3'];
    readonly min = new TuiDay(2000, 2, 20);
    readonly max = new TuiDay(2040, 2, 20);

    searchProgramForm = new FormGroup({
        firstName: new FormControl(),
        middleName: new FormControl(),
        lastName: new FormControl(),
        dateRange: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        status: new FormControl([])
    })

    ngOnInit() {
        this.searchRehabPrograms();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    searchRehabPrograms() {
        this.subscription.add(this.rehabProgramService.getListByCurrentDoctor(this.searchProgramForm.value).subscribe(
            {
                next: programs => {
                    this.rehabPrograms = programs;
                }
            }
        ));
    }
}
