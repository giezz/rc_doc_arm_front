import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenStorageService} from "../services/token-storage.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenStorage: TokenStorageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenStorage.getToken()

        if (!token || req.url.includes('http://localhost:8080/auth')) {
            return next.handle(req);
        }

        const reqClone = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token),
        });

        return next.handle(reqClone);
    }
}

export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
