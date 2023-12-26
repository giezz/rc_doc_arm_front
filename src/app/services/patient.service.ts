import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Patient} from "../models/patient";
import {Observable} from "rxjs";
import {Doctor} from "../models/doctor";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private http: HttpClient = inject(HttpClient)

  getAll(searchParams: any): Observable<Patient[]> {
    let params = new HttpParams();

    if (searchParams.firstName) {
      params = params.set('firstName', searchParams.firstName);
    }
    if (searchParams.middleName) {
      params = params.set('middleName', searchParams.middleName);
    }
    if (searchParams.lastName) {
      params = params.set('lastName', searchParams.lastName);
    }
    // if (searchParams.status != null) {
    //   params = params.set('status', searchParams.status);
    // }
    if (searchParams.birthDate) {
      params = params.set('birthDate', searchParams.birthDate);
    }
    if (searchParams.isDead) {
      params = params.set('isDead', searchParams.isDead);
    }

    console.log(params);
    return this.http.get<Patient[]>('http://localhost:8080/api/v1/patient', { params });
  }

  getByCode(code: number): Observable<Patient> {
    return this.http.get<Patient>('http://localhost:8080/api/v1/patient/' + code)
  }

  addDoctor(patientId: number) {
    return this.http.patch('http://localhost:8080/api/v1/patient/add-doctor', patientId)
  }

  removeDoctor(patientId: number) {
    return this.http.patch('http://localhost:8080/api/v1/patient/remove-doctor', patientId)
  }
}
