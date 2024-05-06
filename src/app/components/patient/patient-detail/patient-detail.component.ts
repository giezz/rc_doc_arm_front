import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Patient} from "../../../models/patient";
import {PatientComponentsService} from "../../../services/components/patient-components.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-patient-detail',
    templateUrl: './patient-detail.component.html',
    styleUrls: ['./patient-detail.component.css', '../../../app.component.css']
})
export class PatientDetailComponent implements OnInit, OnDestroy {

    private patientComponentService: PatientComponentsService = inject(PatientComponentsService);
    isLoaded: boolean = false;
    patient: Patient;
    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        this.subscription.add(this.patientComponentService.patient$.subscribe(
                patient => {
                    if (patient != null) {
                        this.patient = patient;
                        this.isLoaded = true;
                    }
                }
            )
        );
        console.log('PatientDetailComponent');
    }

    ngOnDestroy(): void {
        console.log('PatientDetailComponent destroyed');
        this.subscription.unsubscribe();
    }
}
