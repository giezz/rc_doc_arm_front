import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {Patient} from "../../../models/patient";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ComponentsService} from "../../../services/components.service";

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css', '../../../app.component.css']
})
export class PatientDetailComponent implements OnInit, OnDestroy {

  private componentsService: ComponentsService = inject(ComponentsService);

  patient$: Observable<Patient>;

  ngOnInit(): void {
    // let patientCode: number = Number(this.activeRoute.snapshot.params['patientCode']);
    this.patient$ = this.componentsService.getPatient()
    console.log('PatientDetailComponent');
  }

  ngOnDestroy(): void {
    console.log('PatientDetailComponent destroyed');
  }
}
