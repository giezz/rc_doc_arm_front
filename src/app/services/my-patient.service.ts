import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyPatientService {

  http: HttpClient = inject(HttpClient)

  getMyPatients() {
    return this.http.get('http://localhost:8080/api/v1/patient')
  }
}
