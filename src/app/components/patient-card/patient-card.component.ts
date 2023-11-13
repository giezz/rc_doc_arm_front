import {Component, Input} from '@angular/core';
import {IPatient} from "../../models/IPatient";

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent {
  @Input() patient: IPatient
}
