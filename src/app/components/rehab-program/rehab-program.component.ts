import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../models/patient";
import {Observable, of, Subscription} from "rxjs";
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

    patientCode: number;
    private programId: number;
    patient: Patient;
    isLoaded: boolean = false;

    private subscription: Subscription = new Subscription();

    ngOnInit(): void {
        this.patientCode = Number(this.activeRoute.snapshot.params['patientCode']);
        this.getPatient(this.patientCode);
        this.programId = Number(this.activeRoute.snapshot.params['programId']);
        this.getRehabProgramByPatient(this.patientCode, this.programId)

    }

    private getPatient(code: number) {
        this.subscription.add(this.patientService.getByCode(code).subscribe(
            {
                next: patient => {
                    this.rehabProgramComponentsService.setPatient(patient);
                    this.patient = patient;
                    this.isLoaded = true;
                },
                error: err => {
                    this.router.navigate(['/**']).then()
                }
            }
        ));
    }
    private getRehabProgramByPatient(code: number, programId: number) {
        this.subscription.add(this.patientService.getRehabProgram(code, programId).subscribe(
                {
                    next: program => {
                        this.rehabProgramComponentsService.setProgram(program);
                    },
                    error: err => {
                        this.router.navigate(['/**']).then()
                    }
                }
            )
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    navigateToPatient(): void {
        this.router.navigate(["/patient", this.patientCode]).then()
    }
}
