import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../models/exercise";
import {PageableResponse} from "../models/pageable-response";

@Injectable({
    providedIn: 'root'
})
export class ExerciseService {

    private http: HttpClient = inject(HttpClient);

    getAll(pageNumber: number, pageSize: number, name: string): Observable<PageableResponse<Exercise>> {
        let params = new HttpParams();
        params = params.set('pageNumber', pageNumber);
        params = params.set('pageSize', pageSize);
        if (name) {
            params = params.set('name', name)
        }
        return this.http.get<PageableResponse<Exercise>>(
            "http://localhost:8080/api/v1/exercises",
            {params}
        );
    }
}
