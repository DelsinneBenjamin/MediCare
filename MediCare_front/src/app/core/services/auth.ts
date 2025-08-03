import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { UserData } from '../interfaces/user';
import { TokenResponse } from '../interfaces/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'http://localhost:8000/login/';   // url de l'API

  constructor(private http: HttpClient) {}

    register(data: UserData): Observable<{ tokens: TokenResponse }> {
      return this.http.post<{ tokens: TokenResponse }>(`${this.apiUrl}register/`, data).pipe(
        tap(res => {
          localStorage.setItem('access', res.tokens.access);
          localStorage.setItem('refresh', res.tokens.refresh);
        })
      );
    }

    login(data: { email: string; password: string }): Observable<{ access: string; refresh: string }> {
      return this.http.post<{ access: string; refresh: string }>(this.apiUrl, data).pipe(
        tap(tokens => {
          localStorage.setItem('access', tokens.access);
          localStorage.setItem('refresh', tokens.refresh);
        })
      );
    }

    logout() {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    }

    getAccessToken(): string | null {
      return localStorage.getItem('access');
    }

    isLoggedIn(): boolean {
      return !!this.getAccessToken();
    }

}
