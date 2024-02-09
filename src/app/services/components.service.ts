import { Injectable } from '@angular/core';
import {Patient} from "../models/patient";
import {Observable} from "rxjs";
import {RehabProgram} from "../models/rehab-program";

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private observablePatient: Observable<Patient>;

  private rehabProgram: Observable<RehabProgram>;

  setPatient(patient: Observable<Patient>) {
    this.observablePatient = patient;
  }

  getPatient(): Observable<Patient> {
    return this.observablePatient;
  }

  setRehabProgram(rehabProgram: Observable<RehabProgram>){
    this.rehabProgram = rehabProgram;
  }

  getRehabProgram() {
    return this.rehabProgram;
  }

  getCurrentRehabProgram() {

  }
}
