import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Form} from "../models/form";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private http: HttpClient = inject(HttpClient);

  getAll(): Observable<Form[]> {
    return this.http.get<Form[]>("http://localhost:8080/api/v1/forms")
  }
}
