import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {PatientService} from "../../../../services/patient.service";
import {Observable} from "rxjs";
import {Epicris} from "../../../../models/epicris";
import {ActivatedRoute} from "@angular/router";
import {HospitalizationHistory} from "../../../../models/HospitalizationHistory";

@Component({
    selector: 'app-epicris',
    templateUrl: './epicris.component.html',
    styleUrls: ['./epicris.component.css']
})
export class EpicrisComponent implements OnInit, OnDestroy {

    @Input()
    hospHistory: HospitalizationHistory;

    private patientService: PatientService = inject(PatientService);
    private activeRoute: ActivatedRoute = inject(ActivatedRoute);

    patientCode: number

    epicrisises$ = new Observable<Epicris[]>();

    ngOnInit(): void {
        this.patientCode = Number(this.activeRoute.parent?.snapshot.params['patientCode']);
        this.epicrisises$ = this.patientService.getEpicrisises(this.patientCode, this.hospHistory.id)
    }

    ngOnDestroy(): void {
    }

}
