import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../models/patient";
import {Observable, of, Subscription} from "rxjs";
import {Location} from "@angular/common";
import {RehabProgramComponentsService} from "../../services/components/rehab-program-components.service";

@Component({
    selector: 'app-rehab-program',
    templateUrl: './rehab-program.component.html',
    styleUrls: ['./rehab-program.component.css', '../../app.component.css']
})
export class RehabProgramComponent implements OnInit, OnDestroy {
    private activeRoute: ActivatedRoute = inject(ActivatedRoute);
    private router: Router = inject(Router);
    private patientService: PatientService = inject(PatientService);
    private rehabProgramComponentsService: RehabProgramComponentsService = inject(RehabProgramComponentsService);

    private patientCode: number;
    patient$: Observable<Patient>;

    subscription: Subscription = new Subscription();

    ngOnInit(): void {
        console.log('RehabProgramComponent');
        this.patientCode = Number(this.activeRoute.snapshot.params['patientCode']);
        this.getPatient(this.patientCode);
        this.getPatientCurrentProgram(this.patientCode);
    }

    private getPatient(code: number) {
        const sub$ = this.patientService.getByCode(code).subscribe(
            {
                next: patient => {
                    this.rehabProgramComponentsService.setPatient(patient);
                    this.patient$ = of(patient);
                },
                error: err => {
                    console.log(err);
                    this.rehabProgramComponentsService.setPatient(null);
                }
            }
        );
        this.subscription.add(sub$);
    }

    private getPatientCurrentProgram(code: number) {
        const sub$ = this.patientService.getCurrentRehabProgram(code).subscribe(
            {
                next: program => {
                    this.rehabProgramComponentsService.setProgram(program);
                },
                error: err => {
                    console.log(err);
                    this.rehabProgramComponentsService.setProgram(null);
                }
            }
        );
        this.subscription.add(sub$);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        console.log('RehabProgramComponent destroyed');
    }

    navigateToPatient(): void {
        this.router.navigate(["/patient", this.patientCode]).then()
    }
}
