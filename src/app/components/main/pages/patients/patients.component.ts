import {Component, inject, OnInit} from '@angular/core';
import {PatientService} from "./patient.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Patient} from "../../../../models/patient";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientService = inject(PatientService)

  patients: Patient[] = [];

  readonly columns: string[] = ['lastName', 'firstName', 'middleName', 'gender', 'birthDate', 'deathDate', 'status']

  readonly items = ['Статус 1', 'Статус 2', 'Статус 3'];
  readonly gender = ['Мужской', 'Женский']

  searchPatients = new FormGroup({
    input: new FormControl(''),
    status: new FormControl([]),
    gender: new FormControl(),
    birthDate: new FormControl(),
    isDead: new FormControl(false)
  })

  onSubmit() {
    this.patientService.getAll().subscribe(
      data => {
        console.log(data)
        this.patients = data
      }
    )
  }

  ngOnInit(): void {
    this.patientService.getAll().subscribe(
      data => {
        console.log(data)
        this.patients = data
      }
    )
  }
}
