import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Patient} from "../../models/patient";
import {Observable, Subscription} from "rxjs";
import {PatientService} from "../../services/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientComponentsService} from "../../services/components/patient-components.service";

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css', '../../app.component.css']
})
export class PatientComponent implements OnInit, OnDestroy {

    private activeRoute: ActivatedRoute = inject(ActivatedRoute);
    private router: Router = inject(Router);
    private patientService: PatientService = inject(PatientService);
    private patientComponentService: PatientComponentsService = inject(PatientComponentsService);

    patient: Patient;
    isLoaded: boolean = false;
    private patientCode: number;

    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        this.patientCode = Number(this.activeRoute.snapshot.params['patientCode']);
        this.subscription.add(this.patientService.getByCode(this.patientCode).subscribe(
                {
                    next: patient => {
                        this.patientComponentService.setPatient(patient);
                        this.patient = patient;
                        this.isLoaded = true;
                    },
                    error: () => {
                        this.router.navigate(['/**']).then()
                    }
                }
            )
        )
    }

    ngOnDestroy(): void {
        this.patientComponentService.setPatient(null);
        this.subscription.unsubscribe();
    }

}
