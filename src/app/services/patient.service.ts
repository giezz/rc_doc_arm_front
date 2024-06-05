import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Patient} from "../models/patient";
import {delay, Observable} from "rxjs";
import {RehabProgram} from "../models/rehab-program";
import {SearchPatientsRequest} from "../models/request/search-patients-request";
import {PageableResponse} from "../models/pageable-response";
import {HospitalizationHistory} from "../models/HospitalizationHistory";
import {Epicris} from "../models/epicris";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    private http: HttpClient = inject(HttpClient)
    private api = environment.API_BASE_URL;

    getAll(pageNumber: number, pageSize: number, request: SearchPatientsRequest): Observable<PageableResponse<Patient>> {
        let params = new HttpParams();
        params = params.set('pageNumber', pageNumber);
        params = params.set('pageSize', pageSize);
        if (request.firstName) {
            params = params.set('firstName', request.firstName);
        }
        if (request.middleName) {
            params = params.set('middleName', request.middleName);
        }
        if (request.lastName) {
            params = params.set('lastName', request.lastName);
        }
        if (request.status.length > 0) {
            params = params.set('status', request.status.join(','))
        }
        if (request.gender) {
            params = params.set('gender', request.gender)
        }
        if (request.birthDate) {
            params = params.set('birthDate', request.birthDate);
        }

        return this.http.get<PageableResponse<Patient>>(`${this.api}/api/v1/patients`, {params});
    }

    getByCode(code: number): Observable<Patient> {
        return this.http.get<Patient>(`${this.api}/api/v1/patients/` + code);
    }

    getCurrentRehabProgram(code: number): Observable<RehabProgram> {
        return this.http.get<RehabProgram>(`${this.api}/api/v1/patients/${code}/rehab-programs/current`);
    }

    getRehabProgram(code: number, programId: number): Observable<RehabProgram> {
        return this.http.get<RehabProgram>(
            `${this.api}/api/v1/patients/${code}/rehab-programs/${programId}`,
        );
    }

    getRehabPrograms(code: number): Observable<RehabProgram[]> {
        return this.http.get<RehabProgram[]>(
            `${this.api}/api/v1/patients/${code}/rehab-programs`,
            {
                params: {
                    current: false
                }
            }
        );
    }

    getHospitalizationHistory(patientCode: number): Observable<HospitalizationHistory[]> {
        return this.http.get<HospitalizationHistory[]>(`${this.api}/api/v1/patients/${patientCode}/hosp-history`)
    }

    getEpicrisises(patientCode: number, hospHistoryId: number): Observable<Epicris[]> {
        return this.http.get<Epicris[]>(`${this.api}/api/v1/patients/${patientCode}/hosp-history/${hospHistoryId}/epicrisises`)
    }

}
