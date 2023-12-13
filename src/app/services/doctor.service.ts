import {inject, Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenStorageService} from "./token-storage.service";
import {TokenDoctor} from "../models/token-doctor";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private jwtHelper: JwtHelperService = inject(JwtHelperService)
  private tokenStorageService: TokenStorageService = inject(TokenStorageService)
  private http: HttpClient = inject(HttpClient)

  private token = this.jwtHelper.decodeToken<TokenDoctor>(this.tokenStorageService.getToken()!)!

  getDoctorFullName() {
    return this.token?.doctorFullName
  }

  getDoctorId() {
    return this.token?.doctorId
  }
}
