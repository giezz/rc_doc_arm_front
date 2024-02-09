import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../../services/patient.service";
import {ComponentsService} from "../../../services/components.service";
import {Patient} from "../../../models/patient";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  patientService: PatientService = inject(PatientService)
  patientsComponentService: ComponentsService = inject(ComponentsService)

  ngOnInit(): void {
    let patientCode: number = Number(this.activeRoute.snapshot.paramMap.get('patientCode'))
    this.patientsComponentService.setPatient(this.patientService.getByCode(patientCode));
    // console.log("patient form service" + this.patientsComponentService.getPatient())
  }

  deleteFromMyPatients() {
    // this.patientService.removeDoctor(this.patient?.id!).subscribe(
    //   () => {
    //     this.hasDoctor = false
    //   }
    // )
  }

  addToMyPatients() {
    // console.log(this.patient)
    // console.log(this.patient?.id)
    // this.patientService.addDoctor(this.patient?.id!).subscribe(
    //   () => {
    //     this.hasDoctor = true
    //   }
    // )
  }
}
