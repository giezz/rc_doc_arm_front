import {Component, inject, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {TuiStatus} from "@taiga-ui/kit";
import {Status} from "../../../models/status";
import {TuiTablePagination} from "@taiga-ui/addon-table";
import {SearchPatientsRequest} from "../../../models/request/search-patients-request";
import {PageableResponse} from "../../../models/pageable-response";
import {Patient} from "../../../models/patient";

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css', '../pages.component.css']
})
export class PatientsComponent implements OnInit {

    private patientService: PatientService = inject(PatientService)

    data$: Observable<PageableResponse<Patient>> = new Observable<PageableResponse<Patient>>();
    pageSizes: number[] = [10, 15, 25, 50, 100];
    page: number = 0;
    size: number = this.pageSizes[0];

    readonly columns: string[] = ['lastName', 'firstName', 'middleName', 'gender', 'birthDate', 'status', 'action']

    readonly items = ['Нуждается в реабилитации', 'Проходит реабилитацию', 'Проходил реабилитацию ранее'];
    readonly gender = ['Мужской', 'Женский']

    ngOnInit(): void {
        this.onSubmit();
    }

    searchPatients = new FormGroup({
        firstName: new FormControl(),
        middleName: new FormControl(),
        lastName: new FormControl(),
        status: new FormControl([]),
        gender: new FormControl(),
        birthDate: new FormControl()
    });

    paginationChange(pagination: TuiTablePagination) {
        this.data$ = this.getData(pagination.page, pagination.size);
        this.page = pagination.page;
        this.size = pagination.size
    }

    onSubmit() {
        this.page = 0;
        this.data$ = this.getData(this.page, this.size);
    }

    statusResolver(status: Status): TuiStatus {
        switch (status.name) {
            case "Нуждается в реабилитации": {
                return "warning"
            }
            case "Проходил реабилитацию ранее": {
                return "info";
            }
            case "Проходит реабилитацию": {
                return "primary";
            }
            default: {
                return "error";
            }
        }
    }

    private getData(page: number, size: number) {
        return this.patientService.getAll(page, size, this.createRequest())
    }

    private createRequest(): SearchPatientsRequest {
        let gender: string | null = null;
        if (this.searchPatients.value.gender === this.gender[0]) {
            gender = "m";
        } else if (this.searchPatients.value.gender === this.gender[1]) {
            gender = "f"
        }
        let statuses: number[] = [];
        for (let i = 0; i < this.searchPatients.value.status!.length; i++) {
            switch (this.searchPatients.value.status![i]) {
                case 'Нуждается в реабилитации':
                    statuses.push(1)
                    break;
                case 'Проходит реабилитацию':
                    statuses.push(2)
                    break;
                case 'Проходил реабилитацию ранее':
                    statuses.push(3)
                    break;
            }
        }

        return new SearchPatientsRequest(
            this.searchPatients.value.firstName,
            this.searchPatients.value.middleName,
            this.searchPatients.value.lastName,
            statuses,
            gender,
            this.searchPatients.value.birthDate
        )
    }

}
