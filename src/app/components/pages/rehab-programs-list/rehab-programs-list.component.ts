import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";
import {FormControl, FormGroup} from "@angular/forms";
import {TuiDay} from "@taiga-ui/cdk";
import {SearchProgramsRequest} from "../../../models/request/search-programs-request";
import {PageableResponse} from "../../../models/pageable-response";
import {TuiTablePagination} from "@taiga-ui/addon-table";

@Component({
    selector: 'app-my-patients',
    templateUrl: './rehab-programs-list.component.html',
    styleUrls: ['./rehab-programs-list.component.css', '../pages.component.css']
})
export class RehabProgramsListComponent implements OnInit {

    private rehabProgramService: RehabProgramService = inject(RehabProgramService);

    data$: Observable<PageableResponse<RehabProgram>> = new Observable<PageableResponse<RehabProgram>>();
    pageSizes: number[] = [10, 15, 25, 50, 100];
    page: number = 0;
    size: number = this.pageSizes[0];

    readonly min = new TuiDay(2023, 3, 3);
    readonly max = new TuiDay(2099, 9, 9);

    searchProgramForm = new FormGroup({
        firstName: new FormControl(),
        middleName: new FormControl(),
        lastName: new FormControl(),
        startDateRange: new FormControl(),
        endDateRange: new FormControl(),
        status: new FormControl()
    })

    ngOnInit() {
        this.onSubmit();
    }

    paginationChange(pagination: TuiTablePagination) {
        this.data$ = this.getData(pagination.page, pagination.size);
        this.page = pagination.page;
        this.size = pagination.size
    }

    onSubmit() {
        this.page = 0;
        this.data$ = this.getData(this.page, this.size);
    }

    private getData(page: number, size: number) {
        return this.rehabProgramService.getListByCurrentDoctor(page, size, this.createRequest())
    }

    private createRequest() {
        let startDateFrom: string | null = null;
        let startDateTo: string | null = null;
        if (this.searchProgramForm.value.startDateRange) {
            startDateFrom = this.searchProgramForm.value.startDateRange.from;
            startDateTo = this.searchProgramForm.value.startDateRange.to;
        }
        let endDateFrom: string | null = null;
        let endDateTo: string | null = null;
        if (this.searchProgramForm.value.endDateRange) {
            endDateFrom = this.searchProgramForm.value.endDateRange.from;
            endDateTo = this.searchProgramForm.value.endDateRange.to;
        }

        return new SearchProgramsRequest(
            this.searchProgramForm.value.firstName,
            this.searchProgramForm.value.middleName,
            this.searchProgramForm.value.lastName,
            startDateFrom,
            startDateTo,
            endDateFrom,
            endDateTo,
            this.searchProgramForm.value.status
        );
    }
}
