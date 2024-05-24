import {inject, Injectable} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenStorageService} from "./token-storage.service";
import {TokenDoctor} from "../models/token-doctor";

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    private jwtHelper: JwtHelperService = inject(JwtHelperService)
    private tokenStorageService: TokenStorageService = inject(TokenStorageService)

    private token = this.jwtHelper.decodeToken<TokenDoctor>(this.tokenStorageService.getToken()!)!

    getDoctorFullName() {
        return this.token?.doctorFullName
    }

    getDoctorId() {
        return this.token.doctorId
    }

}
