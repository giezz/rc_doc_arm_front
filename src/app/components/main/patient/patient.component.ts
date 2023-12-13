import {Component, inject, OnInit} from '@angular/core';
import {Patient} from "../../../models/patient";
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../../services/patient.service";
import {PatientComponentsService} from "../../../services/patient-components.service";
import {DoctorService} from "../../../services/doctor.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  activeItemIndex: number = 0;

  patient: Patient
  patientCode: number
  doctorId: number

  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  patientService: PatientService = inject(PatientService)
  patientsComponentService: PatientComponentsService = inject(PatientComponentsService)
  doctorService: DoctorService = inject(DoctorService)

  ngOnInit(): void {
    this.getPatient()
    this.doctorId = this.doctorService.getDoctorId()
  }

  getPatient() {
    this.patientCode = Number(this.activeRoute.snapshot.paramMap.get('patientCode'))
    this.patientService.getByCode(this.patientCode).subscribe(patient => {
        this.patient = patient
        this.patientsComponentService.setPatient(this.patient)
      }
    )
  }

  addToMyPatients() {
    this.patientService.addDoctor(
      this.patientsComponentService.getPatient(),
    ).subscribe(data => console.log(data))
  }

  deleteFromMyPatients() {

  }
}
