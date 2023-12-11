import {Injectable} from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token')
  }
}
