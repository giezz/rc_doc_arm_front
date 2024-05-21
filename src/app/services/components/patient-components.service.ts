import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Patient} from "../../models/patient";
import {HospitalizationHistory} from "../../models/HospitalizationHistory";

@Injectable({
    providedIn: 'root'
})
export class PatientComponentsService {

    private patientSubject = new ReplaySubject<Patient | null>(1);
    public patient$ = this.patientSubject.asObservable();

    public setPatient(patient: Patient | null) {
        this.patientSubject.next(patient)
    }

    private hospHistorySubject = new ReplaySubject<HospitalizationHistory[] | null>(1)
    public hospHistory$ = this.hospHistorySubject.asObservable();

    public setHospHistory(hospHistory: HospitalizationHistory[] | null) {
        this.hospHistorySubject.next(hospHistory);
    }
}
