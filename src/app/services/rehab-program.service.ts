import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/patient";
import {RehabProgram} from "../models/rehab-program";
import {delay, Observable, pipe, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RehabProgramService {

  private http: HttpClient = inject(HttpClient)

  getCurrent(patientId: number) : Observable<RehabProgram> {
    console.log('http call to rehab program')
    return this.http.get<RehabProgram>(`http://localhost:8080/api/v1/rehabs/patient/${patientId}/current`)
      .pipe(delay(500));
  }

  create(patientId: number) {
    return this.http.post<RehabProgram>('http://localhost:8080/api/v1/rehabs', {patientId: patientId})
  }

  addForm(programId: number, formId: number, formType: string) {
    return this.http.patch<RehabProgram>(
      `http://localhost:8080/api/v1/rehabs/${programId}/add-form`,
      {formId: formId, formType: formType})
  }

  addModule(name: string, programId: number) {
    return this.http.patch<RehabProgram>(`http://localhost:8080/api/v1/rehabs/${programId}/add-module`, {name: name})
  }
}
