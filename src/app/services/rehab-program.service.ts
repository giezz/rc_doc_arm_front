import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RehabProgram} from "../models/rehab-program";
import {Observable} from "rxjs";
import {ModuleFormResult} from "../models/module-form-result";
import {ProgramFormResult} from "../models/program-form-result";
import {CreateProtocolRequest} from "../models/request/create-protocol-request";
import {SearchProgramsRequest} from "../models/request/search-programs-request";
import {PageableResponse} from "../models/pageable-response";
import {Protocol} from "../models/protocol";

@Injectable({
    providedIn: 'root'
})
export class RehabProgramService {

    private http: HttpClient = inject(HttpClient)

    getListByCurrentDoctor(pageNumber: number, pageSize: number, request: SearchProgramsRequest) {
        let params = new HttpParams();
        params = params.set('pageNumber', pageNumber);
        params = params.set('pageSize', pageSize);
        if (request.firstName) {
            params = params.set('patientFirstName', request.firstName);
        }
        if (request.middleName) {
            params = params.set('patientMiddleName', request.middleName);
        }
        if (request.lastName) {
            params = params.set('patientLastName', request.lastName);
        }
        if (request.startDateForm && request.startDateTo) {
            params = params.set('startDate', request.startDateForm);
            params = params.set('endDate', request.startDateTo);
        }
        if (request.endDateFrom && request.endDateTo) {
            params = params.set('endDateFrom', request.endDateFrom);
            params = params.set('endDateTo', request.endDateTo);
        }
        if (request.isCurrent) {
            params = params.set('isCurrent', request.isCurrent);
        }

        return this.http.get<PageableResponse<RehabProgram>>(
            "http://localhost:8080/api/v1/rehabs",
            {params}
        )
    }

    getModulesFormsResults(programId: number, excludeIds: number[]): Observable<ModuleFormResult[]> {
        let params = new HttpParams().set('excludeIds', excludeIds.join(','));

        return this.http.get<ModuleFormResult[]>(
            `http://localhost:8080/api/v1/rehabs/${programId}/modules-forms-results`,
            {
                params: params
            }
        )
    }

    getProgramFormsResults(programId: number, excludeIds: number[]): Observable<ProgramFormResult[]> {
        let params = new HttpParams().set('excludeIds', excludeIds.join(','));

        return this.http.get<ProgramFormResult[]>(
            `http://localhost:8080/api/v1/rehabs/${programId}/program-forms-results`,
            {
                params: params
            }
        );
    }

    create(patientId: number): Observable<RehabProgram> {
        return this.http.post<RehabProgram>(
            'http://localhost:8080/api/v1/rehabs',
            {patientId: patientId})
    }

    createProtocol(programId: number, req: CreateProtocolRequest): Observable<Protocol[]> {
        return this.http.post<Protocol[]>(
            `http://localhost:8080/api/v1/rehabs/${programId}/protocol`,
            req
        );
    }

    getProtocols(programId: number): Observable<Protocol[]> {
        return this.http.get<Protocol[]>(`http://localhost:8080/api/v1/rehabs/${programId}/protocols`);
    }

    addForm(programId: number, formId: number, formType: string): Observable<RehabProgram> {
        return this.http.put<RehabProgram>(
            `http://localhost:8080/api/v1/rehabs/${programId}/form`,
            {formId: formId, formType: formType}
        );
    }

    deleteForm(programId: number, formId: number): Observable<RehabProgram> {
        return this.http.delete<RehabProgram>(`http://localhost:8080/api/v1/rehabs/${programId}/form/${formId}`);
    }

    addModule(name: string, programId: number): Observable<RehabProgram> {
        return this.http.put<RehabProgram>(
            `http://localhost:8080/api/v1/rehabs/${programId}/module`,
            {name: name}
        );
    }

    deleteModule(programId: number, moduleId: number): Observable<RehabProgram> {
        return this.http.delete<RehabProgram>(`http://localhost:8080/api/v1/rehabs/${programId}/module/${moduleId}`);
    }

}
