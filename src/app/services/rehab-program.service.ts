import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RehabProgram} from "../models/rehab-program";
import {Observable} from "rxjs";
import {ModuleForm} from "../models/module-form";
import {ProgramForm} from "../models/program-form";
import {ModuleFormResult} from "../models/module-form-result";
import {ProgramFormResult} from "../models/program-form-result";
import {CreateProtocolRequest} from "../models/request/create-protocol-request";

@Injectable({
    providedIn: 'root'
})
export class RehabProgramService {

    private http: HttpClient = inject(HttpClient)

    getListByCurrentDoctor() {
        return this.http.get<RehabProgram[]>("http://localhost:8080/api/v1/rehabs")
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

    create(patientId: number) {
        return this.http.post<RehabProgram>(
            'http://localhost:8080/api/v1/rehabs',
            {patientId: patientId})
    }

    createProtocol(programId: number, req: CreateProtocolRequest) {
        return this.http.post<void>(
            `http://localhost:8080/api/v1/rehabs/${programId}/protocol`,
            req
        )
    }

    addForm(programId: number, formId: number, formType: string) {
        return this.http.put<RehabProgram>(
            `http://localhost:8080/api/v1/rehabs/${programId}/form`,
            {formId: formId, formType: formType})
    }

    addModule(name: string, programId: number) {
        return this.http.put<RehabProgram>(
            `http://localhost:8080/api/v1/rehabs/${programId}/module`,
            {name: name}
        )
    }

}
