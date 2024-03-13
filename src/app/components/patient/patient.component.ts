import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Patient} from "../../models/patient";
import {Observable, Subscription} from "rxjs";
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {PatientComponentsService} from "../../services/components/patient-components.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css', '../../app.component.css']
})
export class PatientComponent implements OnInit, OnDestroy {

  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private patientService: PatientService = inject(PatientService);
  private patientComponentService: PatientComponentsService = inject(PatientComponentsService);
  private location: Location = inject(Location);

  patient$: Observable<Patient>;

  subscription: Subscription = new Subscription();

  ngOnInit() {
    console.log('PatientComponent');
    let patientCode: number = Number(this.activeRoute.snapshot.params['patientCode']);
    let sub$ = this.patientService.getByCode(patientCode).subscribe(
      patient => {
        this.patientComponentService.setPatient(patient);
        this.patient$ = this.patientComponentService.patient$;
      }
    )
    this.subscription.add(sub$);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('PatientComponent destroyed');
  }

  goBack() {
    this.location.back();
  }
}
