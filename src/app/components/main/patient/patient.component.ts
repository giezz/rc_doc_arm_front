import {Component, inject, OnInit} from '@angular/core';
import {Patient} from "../../../models/patient";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../pages/patients/patient.service";
import {PatientComponentsService} from "../../../services/patient-components.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  activeItemIndex: number = 0;

  patient: Patient
  patientCode: number

  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  patientService: PatientService = inject(PatientService)
  patientsComponentService: PatientComponentsService = inject(PatientComponentsService)

  ngOnInit(): void {
    this.getPatient()
  }

  getPatient() {
    this.patientCode = Number(this.activeRoute.snapshot.paramMap.get('patientCode'))
    this.patientService.getByCode(this.patientCode).subscribe(patient => {
        this.patient = patient
        this.patientsComponentService.setPatient(this.patient)
      }
    )
  }
}
