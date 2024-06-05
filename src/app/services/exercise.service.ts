import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../models/exercise";
import {PageableResponse} from "../models/pageable-response";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ExerciseService {

    private http: HttpClient = inject(HttpClient);
    private api = environment.API_BASE_URL;

    getAll(pageNumber: number, pageSize: number, name: string): Observable<PageableResponse<Exercise>> {
        let params = new HttpParams();
        params = params.set('pageNumber', pageNumber);
        params = params.set('pageSize', pageSize);
        if (name) {
            params = params.set('name', name)
        }
        return this.http.get<PageableResponse<Exercise>>(
            `${this.api}/api/v1/exercises`,
            {params}
        );
    }
}
