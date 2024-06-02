import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Module} from "../models/module";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ModuleService {

    private http: HttpClient = inject(HttpClient);

    getModuleById(id: number): Observable<Module> {
        return this.http.get<Module>(`http://localhost:8080/api/v1/modules/${id}`);
    }

    renameModule(moduleId: number, moduleName: string) {
        return this.http.patch<Module>(
            `http://localhost:8080/api/v1/modules/${moduleId}/name`,
            {newName: moduleName}
        )
    }

    updateModule(id: number, module: Module) {
        return this.http.put<Module>(
            `http://localhost:8080/api/v1/modules/${id}`,
            {
                exercises: module.exercises,
                forms: module.forms
            }
        )
    }
}
