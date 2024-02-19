import {inject, Injectable} from '@angular/core';
import {Patient} from "../models/patient";
import {AsyncSubject, BehaviorSubject, distinctUntilChanged, Observable, ReplaySubject, Subject} from "rxjs";
import {RehabProgram} from "../models/rehab-program";
import {PatientService} from "./patient.service";
import {AsyncPipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private patient$: Observable<Patient>;
  private rehabProgram$: Observable<RehabProgram> = new Observable<RehabProgram>();


  setPatient(patient$: Observable<Patient>) {
    this.patient$ = patient$;
  }

  getPatient(): Observable<Patient> {
    return this.patient$;
  }

  setRehabProgram(rehabProgram$: Observable<RehabProgram>) {
    this.rehabProgram$ = rehabProgram$;
  }

  getRehabProgram(): Observable<RehabProgram> {
    return this.rehabProgram$;
  }
}
