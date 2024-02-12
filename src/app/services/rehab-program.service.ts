import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/patient";
import {RehabProgram} from "../models/rehab-program";

@Injectable({
  providedIn: 'root'
})
export class RehabProgramService {

  private http: HttpClient = inject(HttpClient)

  getCurrent(patient: Patient) {
    return this.http.get<RehabProgram>(`http://localhost:8080/api/v1/rehabs/patient/${patient.id}/current`)
  }

  create(patientId: number) {
    return this.http.post<RehabProgram>('http://localhost:8080/api/v1/rehabs', {patientId: patientId})
  }

  addModule(name: string, programId: number) {
    return this.http.patch<RehabProgram>(`http://localhost:8080/api/v1/rehabs/${programId}/add-module`, {name: name})
  }
}
