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

  addForm(moduleId: number, formId: number, blockId: number): Observable<Module> {
    return this.http.post<Module>(
      `http://localhost:8080/api/v1/modules/${moduleId}/add-form`,
      {
        formId: formId,
        blockId: blockId
      }
    );
  }

  addExercise(moduleId: number, exerciseId: number, blockId: number): Observable<Module> {
    return this.http.post<Module>(
      `http://localhost:8080/api/v1/modules/${moduleId}/add-exercise`,
      {
        exerciseId: exerciseId,
        blockId: blockId
      }
    );
  }

  deleteFrom(moduleId: number, formId: number): Observable<Module> {
    return this.http.delete<Module>(`http://localhost:8080/api/v1/modules/${moduleId}/delete-form/${formId}`)
  }

  deleteExercise(moduleId: number, exerciseId: number) {
    return this.http.delete<Module>(`http://localhost:8080/api/v1/modules/${moduleId}/delete-exercise/${exerciseId}`)
  }

  renameModule(moduleId: number, moduleName: string) {
    return this.http.patch<Module>(
      `http://localhost:8080/api/v1/modules/${moduleId}/name`,
      {newName: moduleName}
    )
  }
}
