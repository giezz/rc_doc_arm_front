import { Injectable } from '@angular/core';
import {Patient} from "../models/patient";
import {Observable} from "rxjs";
import {RehabProgram} from "../models/rehab-program";

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private patient: Patient | null = null;

  private rehabProgram: Observable<RehabProgram>;

  setPatient(patient: Patient) {
    this.patient = patient;
  }

  getPatient(): Patient | null {
    return this.patient;
  }

  setRehabProgram(rehabProgram: Observable<RehabProgram>){
    this.rehabProgram = rehabProgram;
  }

  getRehabProgram() {
    return this.rehabProgram;
  }
}
