import {inject, Injectable} from '@angular/core';
import {Patient} from "../models/patient";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {RehabProgram} from "../models/rehab-program";
import {PatientService} from "./patient.service";

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private patient = new BehaviorSubject<any>(null)

  public patient$:Observable<Patient> = this.patient.asObservable()

  setPatient(patient: Patient) {
    this.patient.next(patient)
  }
}
