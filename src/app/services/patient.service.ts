import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Patient} from "../models/patient";
import {delay, Observable} from "rxjs";
import {RehabProgram} from "../models/rehab-program";
import {PageablePatients} from "../models/pageable-patients";

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    private http: HttpClient = inject(HttpClient)

    getAll(pageNumber: number, pageSize: number, searchParams: Partial<any>): Observable<PageablePatients> {
        let params = new HttpParams();
        params = params.set('pageNumber', pageNumber);
        params = params.set('pageSize', pageSize);
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

        return this.http.get<PageablePatients>('http://localhost:8080/api/v1/patients', {params});
    }

    getByCode(code: number): Observable<Patient> {
        return this.http.get<Patient>('http://localhost:8080/api/v1/patients/' + code)
            .pipe(
                delay(500)
            );
    }

    getCurrentRehabProgram(code: number): Observable<RehabProgram> {
        return this.http.get<RehabProgram>(
            `http://localhost:8080/api/v1/patients/${code}/rehab-programs/current`,
        ).pipe(
            delay(500)
        );
    }

    getRehabProgram(code: number, programId: number): Observable<RehabProgram> {
        return this.http.get<RehabProgram>(
            `http://localhost:8080/api/v1/patients/${code}/rehab-programs`,
            {
                params: {
                    id: programId
                }
            }
        )
    }

    getRehabPrograms(code: number): Observable<RehabProgram[]> {
        return this.http.get<RehabProgram[]>(
            `http://localhost:8080/api/v1/patients/${code}/rehab-programs`,
            {
                params: {
                    current: false
                }
            }
        ).pipe(
            delay(500)
        );
    }

}
