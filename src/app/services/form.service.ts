import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Form} from "../models/form";
import {Observable} from "rxjs";
import {FormDetails} from "../models/form-details";
import {Variant} from "../models/variant";
import {PageableResponse} from "../models/pageable-response";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FormService {

    private http: HttpClient = inject(HttpClient);
    private api = environment.API_BASE_URL;

    getAll(pageNumber: number, pageSize: number, name: string): Observable<PageableResponse<Form>> {
        let params = new HttpParams();
        params = params.set('pageNumber', pageNumber);
        params = params.set('pageSize', pageSize);
        if (name) {
            params = params.set('name', name)
        }
        return this.http.get<PageableResponse<Form>>(
            `${this.api}/api/v1/forms`,
            {params}
        );
    }

    getDetails(formId: number): Observable<FormDetails> {
        return this.http.get<FormDetails>(`${this.api}/api/v1/forms/${formId}/details`);
    }

    getModuleFormResults(moduleFormId: number): Observable<Variant[]> {
        return this.http.get<Variant[]>(`${this.api}/api/v1/forms/module-form/${moduleFormId}/results`);
    }

    getProgramFormResults(programFormId: number): Observable<Variant[]> {
        return this.http.get<Variant[]>(`${this.api}/api/v1/forms/program-form/${programFormId}/results`);
    }
}
