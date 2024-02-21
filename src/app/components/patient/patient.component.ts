import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Patient} from "../../models/patient";
import {Observable} from "rxjs";
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute} from "@angular/router";
import {ComponentsService} from "../../services/components.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css', '../../app.component.css']
})
export class PatientComponent implements OnInit, OnDestroy {

  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private patientService: PatientService = inject(PatientService);
  private componentsService: ComponentsService = inject(ComponentsService);
  private location: Location = inject(Location);

  patient$: Observable<Patient>;

  ngOnInit() {
    console.log('PatientComponent');
    let patientCode: number = Number(this.activeRoute.snapshot.params['patientCode']);
    this.patient$ = this.patientService.getByCode(patientCode);
    this.componentsService.setPatient(this.patient$);
  }

  ngOnDestroy() {
    console.log('PatientComponent destroyed');
  }

  goBack() {
    this.location.back();
  }
}
