import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IcfCategory} from "../models/icf-category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IcfService {

    private http: HttpClient = inject(HttpClient);

    getAllRoots(): Observable<IcfCategory[]> {
        return this.http.get<IcfCategory[]>('http://localhost:8082/api/v1/categories')
    }

    getByQuery(q: string) {
        let params = new HttpParams();
        params = params.set('q', q);
        return this.http.get<IcfCategory[]>('http://localhost:8082/api/v1/categories', {params});
    }

    getChildren(code: string): Observable<IcfCategory[]> {
        return this.http.get<IcfCategory[]>(`http://localhost:8082/api/v1/categories/${code}`)
    }
}
