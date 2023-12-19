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
    return this.http.get<RehabProgram>(`http://localhost:8080/api/v1/rehab/${patient.id}/current`)
  }

  create(patientId: number) {
    return this.http.post('http://localhost:8080/api/v1/rehab/create', patientId)
  }
}
