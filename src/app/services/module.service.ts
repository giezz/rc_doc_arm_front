import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private http: HttpClient = inject(HttpClient);

  // getModuleById(id: number) {
  //   this.http.get()
  // }
}
