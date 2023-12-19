import {Component, inject, OnInit} from '@angular/core';
import {PatientService} from "../../../../services/patient.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Patient} from "../../../../models/patient";
import {Router} from "@angular/router";
import {ComponentsService} from "../../../../services/components.service";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientService: PatientService = inject(PatientService)

  patients: Patient[] = [];

  readonly columns: string[] = ['lastName', 'firstName', 'middleName', 'gender', 'birthDate', 'deathDate', 'status']

  readonly items = ['Статус 1', 'Статус 2', 'Статус 3'];
  readonly gender = ['Мужской', 'Женский']

  searchPatients = new FormGroup({
    firstName: new FormControl(),
    middleName: new FormControl(),
    lastName: new FormControl(),
    status: new FormControl([]),
    gender: new FormControl(),
    birthDate: new FormControl(),
    isDead: new FormControl(false)
  })

  ngOnInit(): void {
    this.onSubmit()
  }

  onSubmit() {
    this.patientService.getAll(this.searchPatients.value).subscribe(
      data => {
        console.log(data)
        this.patients = data
      }
    )
  }
}
