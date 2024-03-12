import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RehabProgram} from "../models/rehab-program";
import {Observable} from "rxjs";
import {ModuleForm} from "../models/module-form";

@Injectable({
    providedIn: 'root'
})
export class RehabProgramService {

    private http: HttpClient = inject(HttpClient)

    create(patientId: number) {
        return this.http.post<RehabProgram>(
            'http://localhost:8080/api/v1/rehabs',
            {patientId: patientId})
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

    getResults(programId: number): Observable<ModuleForm[]> {
        return this.http.get<ModuleForm[]>(`http://localhost:8080/api/v1/rehabs/${programId}/results`)
    }
}
