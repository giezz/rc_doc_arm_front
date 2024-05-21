import {Component, inject, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {PatientComponentsService} from "../../../services/components/patient-components.service";
import {Observable, Subscription} from "rxjs";
import {HospitalizationHistory} from "../../../models/HospitalizationHistory";
import {ActivatedRoute} from "@angular/router";
import {TuiDialogContext, TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusContent} from "@tinkoff/ng-polymorpheus";

@Component({
    selector: 'app-emc',
    templateUrl: './emc.component.html',
    styleUrls: ['./emc.component.css']
})
export class EmcComponent implements OnInit {

    private patientService: PatientService = inject(PatientService);
    private activeRoute: ActivatedRoute = inject(ActivatedRoute);
    private dialogService: TuiDialogService = inject(TuiDialogService);

    private subscription: Subscription = new Subscription();
    hospHistory: HospitalizationHistory[] = [];
    patientCode: number;
    isLoaded: boolean = false;
    isAvailable: boolean = true;

    ngOnInit(): void {
        this.patientCode = Number(this.activeRoute.parent?.snapshot.params['patientCode']);
        this.subscription.add(this.patientService.getHospitalizationHistory(this.patientCode).subscribe(
            {
                next: hospHistory => {
                    this.hospHistory = hospHistory;
                    this.isLoaded = true;
                },
                error: () => {
                    this.isAvailable = false;
                    this.isLoaded = true;
                }
            }
        ))
    }

    openEpicrisisDialog(content: PolymorpheusContent<TuiDialogContext>) {
        this.subscription.add(this.dialogService.open(content, {size: "auto"}).subscribe())
    }

}
