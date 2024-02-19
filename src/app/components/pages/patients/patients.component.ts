import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {Patient} from "../../../models/patient";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit, OnDestroy {

  patientService: PatientService = inject(PatientService)

  patients$: Observable<Patient[]>;

  readonly columns: string[] = ['lastName', 'firstName', 'middleName', 'gender', 'birthDate', 'deathDate', 'status']

  readonly items = ['Статус 1', 'Статус 2', 'Статус 3'];
  readonly gender = ['Мужской', 'Женский']

  ngOnInit(): void {
    console.log('PatientsComponent');
    this.onSubmit()
  }

  ngOnDestroy() {
    console.log('PatientsComponent destroyed');
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
    // this.patientService.getAll(this.searchPatients.value).subscribe(
    //   data => {
    //     console.log(data)
    //     this.patients = data
    //   }
    // )
  }
}
