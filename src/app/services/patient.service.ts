import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/patient";
import {Observable} from "rxjs";
import {Doctor} from "../models/doctor";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  http = inject(HttpClient)

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:8080/api/v1/patient')
  }

  getByCode(code: number): Observable<Patient> {
    return this.http.get<Patient>('http://localhost:8080/api/v1/patient/' + code)
  }

  addDoctor(patient: Patient) {
    return this.http.patch(`http://localhost:8080/api/v1/patient/add-doctor/${patient.id}`, {})
  }
}
