import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/patient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  http = inject(HttpClient)

  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:8080/api/v1/patients')
  }

  getByCode(code: number): Observable<Patient> {
    return this.http.get<Patient>('http://localhost:8080/api/v1/patients/' + code)
  }

  getByRequest() {

  }
}
