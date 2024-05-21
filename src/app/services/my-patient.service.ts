import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../models/patient";

@Injectable({
    providedIn: 'root'
})
export class MyPatientService {

    http: HttpClient = inject(HttpClient)

    getMyPatients() {
        return this.http.get<Patient[]>('http://localhost:8080/api/v1/doctor/my-patients')
    }
}
