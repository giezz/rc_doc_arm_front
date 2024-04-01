import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RehabProgramService} from "../../../services/rehab-program.service";
import {PatientComponentsService} from "../../../services/components/patient-components.service";
import {Subscription} from "rxjs";
import {PatientService} from "../../../services/patient.service";
import {RehabProgram} from "../../../models/rehab-program";

@Component({
    selector: 'app-rehab-programs-history',
    templateUrl: './rehab-programs-history.component.html',
    styleUrls: ['./rehab-programs-history.component.css']
})
export class RehabProgramsHistoryComponent implements OnInit, OnDestroy {

    private patientComponentsService: PatientComponentsService = inject(PatientComponentsService);
    private patientService: PatientService = inject(PatientService);
    private rehabProgramService: RehabProgramService = inject(RehabProgramService);

    private subscription: Subscription = new Subscription();

    isLoaded: boolean = false;
    rehabPrograms: RehabProgram[] = [];


    ngOnInit() {
        this.subscription.add(
            this.patientComponentsService.patient$.subscribe(
                patient => {
                    if (patient != null) {
                        this.fetchRehabPrograms(patient.patientCode);
                    }
                }
            )
        )
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    fetchRehabPrograms(code: number) {
        this.subscription.add(
            this.patientService.getRehabPrograms(code).subscribe(
                programs => {
                    this.rehabPrograms = programs
                    this.isLoaded = true;
                }
            )
        )
    }

}
