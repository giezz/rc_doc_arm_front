import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Form} from "../models/form";
import {Observable} from "rxjs";
import {FormDetails} from "../models/form-details";
import {Variant} from "../models/variant";

@Injectable({
    providedIn: 'root'
})
export class FormService {

    private http: HttpClient = inject(HttpClient);

    getAll(): Observable<Form[]> {
        return this.http.get<Form[]>("http://localhost:8080/api/v1/forms")
    }

    getDetails(formId: number): Observable<FormDetails> {
        return this.http.get<FormDetails>(`http://localhost:8080/api/v1/forms/${formId}/details`)
    }

    getModuleFormResults(moduleFormId: number) {
        return this.http.get<Variant[]>(`http://localhost:8080/api/v1/forms/module-form/${moduleFormId}/results`)
    }
}
