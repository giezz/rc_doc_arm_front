import {Component, Input} from '@angular/core';
import {Patient} from "../../../../../../models/patient";

@Component({
  selector: 'app-patient-detail-card',
  templateUrl: './patient-detail-card.component.html',
  styleUrls: ['./patient-detail-card.component.css']
})
export class PatientDetailCardComponent {

  @Input()
  patient: Patient

}
