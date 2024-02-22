import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../models/exercise";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private http: HttpClient = inject(HttpClient);

  getAll(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>("http://localhost:8080/api/v1/exercises")
  }
}
