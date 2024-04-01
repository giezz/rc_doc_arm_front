import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {Patient} from "../../../models/patient";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {TuiStatus} from "@taiga-ui/kit";
import {Status} from "../../../models/status";

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css', '../pages.component.css']
})
export class PatientsComponent implements OnInit, OnDestroy {

    patientService: PatientService = inject(PatientService)

    patients$: Observable<Patient[]>;

    readonly columns: string[] = ['lastName', 'firstName', 'middleName', 'gender', 'birthDate', 'status', 'action']

    readonly items = ['Статус 1', 'Статус 2', 'Статус 3'];
    readonly gender = ['Мужской', 'Женский']

    ngOnInit(): void {
        this.onSubmit()
    }

    ngOnDestroy() {
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

    onSubmit() {
        this.patients$ = this.patientService.getAll(this.searchPatients.value)
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

}
