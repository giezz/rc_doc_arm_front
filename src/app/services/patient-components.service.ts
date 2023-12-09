import { Injectable } from '@angular/core';
import {Patient} from "../models/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientComponentsService {

  private patient: Patient

  setPatient(patient: Patient) {
    this.patient = patient
  }

  getPatient(): Patient {
    return this.patient
  }
}
