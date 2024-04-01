import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, shareReplay} from "rxjs";
import {Patient} from "../../models/patient";

@Injectable({
    providedIn: 'root'
})
export class PatientComponentsService {

    private patientSubject = new ReplaySubject<Patient | null>(1);
    public patient$ = this.patientSubject.asObservable();

    public setPatient(patient: Patient) {
        this.patientSubject.next(patient)
    }
}
