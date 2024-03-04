import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/patient";
import {RehabProgram} from "../models/rehab-program";
import {delay, Observable, pipe, shareReplay} from "rxjs";
import {FormResult} from "../models/form-result";

@Injectable({
  providedIn: 'root'
})
export class RehabProgramService {

  private http: HttpClient = inject(HttpClient)

  getResults(programId: number): Observable<FormResult[]> {
    return this.http.get<FormResult[]>(`http://localhost:8080/api/v1/rehabs/${programId}/results`)
  }

  create(patientId: number) {
    return this.http.post<RehabProgram>('http://localhost:8080/api/v1/rehabs', {patientId: patientId})
  }

  addForm(programId: number, formId: number, formType: string) {
    return this.http.put<RehabProgram>(
      `http://localhost:8080/api/v1/rehabs/${programId}/form`,
      {formId: formId, formType: formType})
  }

  addModule(name: string, programId: number) {
    return this.http.put<RehabProgram>(`http://localhost:8080/api/v1/rehabs/${programId}/module`, {name: name})
  }
}
