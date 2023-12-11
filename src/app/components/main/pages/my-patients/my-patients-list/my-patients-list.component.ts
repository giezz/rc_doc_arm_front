import { Component } from '@angular/core';
import {Patient} from "../../../../../models/patient";

@Component({
  selector: 'app-my-patients-list',
  templateUrl: './my-patients-list.component.html',
  styleUrls: ['./my-patients-list.component.css']
})
export class MyPatientsListComponent {

  patients: Patient[]

}
