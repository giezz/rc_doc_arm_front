import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Patient} from "../../../models/patient";
import {Observable} from "rxjs";
import {PatientComponentsService} from "../../../services/components/patient-components.service";

@Component({
    selector: 'app-patient-detail',
    templateUrl: './patient-detail.component.html',
    styleUrls: ['./patient-detail.component.css', '../../../app.component.css']
})
export class PatientDetailComponent implements OnInit, OnDestroy {

    private patientComponentService: PatientComponentsService = inject(PatientComponentsService);

    patient: Patient;

    ngOnInit(): void {
        this.patientComponentService.patient$.subscribe(
            patient => {
                if (patient != null) {
                    this.patient = patient;
                }
            }
        )
        console.log('PatientDetailComponent');
    }

    ngOnDestroy(): void {
        console.log('PatientDetailComponent destroyed');
    }
}
