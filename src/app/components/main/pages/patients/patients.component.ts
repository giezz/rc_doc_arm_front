import { Component } from '@angular/core';
import {tuiIconSearchLarge} from "@taiga-ui/icons";
import {IPatient} from "../../../../models/IPatient";
import {patients} from "../../../../data/patients";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  protected readonly tuiIconSearchLarge = tuiIconSearchLarge;

  patients: readonly IPatient[] = patients;

  readonly columns: string[] = ['lastName', 'firstName', 'middleName', 'gender', 'birthDate', 'deathDate', 'status']

}
