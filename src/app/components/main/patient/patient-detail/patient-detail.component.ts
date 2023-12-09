import {Component, inject, OnInit} from '@angular/core';
import {Patient} from "../../../../models/patient";
import {PatientComponentsService} from "../../../../services/patient-components.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patientComponentsService: PatientComponentsService = inject(PatientComponentsService)

  patient: Patient

  today = new Date();

  ngOnInit(): void {
    this.patient = this.patientComponentsService.getPatient()
  }
}
