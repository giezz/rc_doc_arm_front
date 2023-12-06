import { Component } from '@angular/core';
import {tuiIconSearchLarge} from "@taiga-ui/icons";
import {IPatient} from "../../../../models/IPatient";
import {patients} from "../../../../data/patients";
import {PatientService} from "./patient.service";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

  constructor(
    private patientService: PatientService
  ) {
  }

  protected readonly tuiIconSearchLarge = tuiIconSearchLarge;

  patients: readonly IPatient[] = patients;

  click() {
    this.patientService.getAll().subscribe(
      data => {
        console.log(data)
      }
    )
  }

  readonly columns: string[] = ['lastName', 'firstName', 'middleName', 'gender', 'birthDate', 'deathDate', 'status']

}
