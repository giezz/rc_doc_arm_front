import {Component, inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {PatientComponentsService} from "../../../services/components/patient-components.service";
import {PatientService} from "../../../services/patient.service";
import {RehabProgramService} from "../../../services/rehab-program.service";
import {RehabProgram} from "../../../models/rehab-program";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {Patient} from "../../../models/patient";
import {Router} from "@angular/router";

@Component({
    selector: 'app-rehab-programs',
    templateUrl: './rehab-programs.component.html',
    styleUrls: ['./rehab-programs.component.css']
})
export class RehabProgramsComponent implements OnInit, OnDestroy {
    private patientComponentsService: PatientComponentsService = inject(PatientComponentsService);
    private patientService: PatientService = inject(PatientService);
    private rehabProgramService: RehabProgramService = inject(RehabProgramService);
    private dialogService = inject(TuiDialogService);
    private injector: Injector = inject(Injector);
    private router: Router = inject(Router);

    private subscription: Subscription = new Subscription();

    rehabPrograms: RehabProgram[] = [];
    isLoaded: boolean = false;
    currentProgram: RehabProgram;
    isCurrentLoaded: boolean = false;
    hasCurrent: boolean;
    patient: Patient;

    ngOnInit() {
        this.subscription.add(
            this.patientComponentsService.patient$.subscribe(
                patient => {
                    if (patient != null) {
                        this.patient = patient;
                        this.fetchRehabPrograms(patient.patientCode);
                        this.fetchCurrentRehabProgram(patient.patientCode);
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

    fetchCurrentRehabProgram(code: number) {
        this.subscription.add(
            this.patientService.getCurrentRehabProgram(code).subscribe(
                {
                    next: program => {
                        this.currentProgram = program;
                        this.isCurrentLoaded = true;
                        this.hasCurrent = true;
                    },
                    error: err => {
                        this.isCurrentLoaded = true;
                        this.hasCurrent = false;
                    }
                }
            )
        )
    }

    showProgramCreationDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.dialogService.open(content).subscribe();
    }

    createRehabProgram() {
        this.subscription.add(this.rehabProgramService.create(this.patient.id).subscribe(
                program => {
                    this.router.navigate(["/patient",this.patient.patientCode, "rehab-program", program.id]).then()
                }
            )
        )
    }

}
