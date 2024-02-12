import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PatientService} from "../../../services/patient.service";
import {ComponentsService} from "../../../services/components.service";
import {Patient} from "../../../models/patient";
import {Observable} from "rxjs";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private componentsService: ComponentsService = inject(ComponentsService);
  private patientService: PatientService = inject(PatientService);

  patient: Patient;

  ngOnInit(): void {
    let patientCode: number = Number(this.activeRoute.snapshot.paramMap.get('patientCode'));
    this.patientService.getByCode(patientCode)
      .subscribe(patient => {
        this.patient = patient;
        this.componentsService.setPatient(patient);
      })
  }
  deleteFromMyPatients() {
  }

  addToMyPatients() {
  }
}
