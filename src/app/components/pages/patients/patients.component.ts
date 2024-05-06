import {Component, inject, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {TuiStatus} from "@taiga-ui/kit";
import {Status} from "../../../models/status";
import {TUI_TABLE_PAGINATION_OPTIONS, TuiTablePagination} from "@taiga-ui/addon-table";
import {PageablePatients} from "../../../models/pageable-patients";

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css', '../pages.component.css']
})
export class PatientsComponent implements OnInit {

    patientService: PatientService = inject(PatientService)

    data$: Observable<PageablePatients> = new Observable<PageablePatients>();
    pageSizes: number[] = [10, 15, 25, 50, 100];
    page: number = 0;
    size: number = this.pageSizes[0];

    readonly columns: string[] = ['lastName', 'firstName', 'middleName', 'gender', 'birthDate', 'status', 'action']

    readonly items = ['Статус 1', 'Статус 2', 'Статус 3'];
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
        birthDate: new FormControl(),
        isDead: new FormControl(false)
    })

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

    getData(page: number, size: number) {
        return this.patientService.getAll(page, size, this.searchPatients.value)
    }

}
