import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Module} from "../models/module";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ModuleService {

    private http: HttpClient = inject(HttpClient);
    private api = environment.API_BASE_URL;

    getModuleById(id: number): Observable<Module> {
        return this.http.get<Module>(`${this.api}/api/v1/modules/${id}`);
    }

    renameModule(moduleId: number, moduleName: string) {
        return this.http.patch<Module>(
            `${this.api}/api/v1/modules/${moduleId}/name`,
            {newName: moduleName}
        )
    }

    updateModule(id: number, module: Module) {
        return this.http.put<Module>(
            `${this.api}/api/v1/modules/${id}`,
            {
                exercises: module.exercises,
                forms: module.forms
            }
        )
    }
}
