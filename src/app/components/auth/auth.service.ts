import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthRequest} from "./auth-request";
import {Observable} from "rxjs";
import {JwtResponse} from "./jwt-response";
import {TokenStorageService} from "./token-storage.service";
import {JwtHelperService} from "@auth0/angular-jwt";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
    private jwtHelper: JwtHelperService
  ) { }

  login(authRequest: AuthRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>("http://localhost:8080/auth", authRequest, httpOptions)
  }

  logout() {
    this.tokenStorage.removeToken()
  }

  isAuthenticated(): boolean {
    const token = this.tokenStorage.getToken()

    if (token === null) {
      return false
    }

    return !this.jwtHelper.isTokenExpired(token)
  }

}
