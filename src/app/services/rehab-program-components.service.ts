import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Patient} from "../models/patient";
import {RehabProgram} from "../models/rehab-program";

@Injectable({
    providedIn: 'root'
})
export class RehabProgramComponentsService {

    private patientSubject = new ReplaySubject<Patient | null>(1);
    public patient$ = this.patientSubject.asObservable();

    private programSubject = new ReplaySubject<RehabProgram | null>(1);
    public program$ = this.programSubject.asObservable();

    public setPatient(patient: Patient | null) {
        this.patientSubject.next(patient);
    }

    public setProgram(program: RehabProgram | null) {
        this.programSubject.next(program);
    }
}
