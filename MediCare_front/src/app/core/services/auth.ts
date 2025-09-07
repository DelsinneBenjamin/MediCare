import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { TokenResponse } from '../interfaces/tokenResponse';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'http://localhost:8000/api/users/';   // url de l'API

  constructor(private http: HttpClient, private readonly router:Router) {}

  // =========================== Login + Register  ===============================
    register(data: User): Observable<{ tokens: TokenResponse }> {
      return this.http.post<{ tokens: TokenResponse }>(`${this.apiUrl}register/`, data).pipe(
        tap(res => {
          localStorage.setItem('access', res.tokens.access);
          localStorage.setItem('refresh', res.tokens.refresh);
        })
      );
    }

    login(data: { email: string; password: string }): Observable<{ access: string; refresh: string }> {
      return this.http.post<{ access: string; refresh: string }>(`${this.apiUrl}login/`, data).pipe(
        tap(tokens => {
          localStorage.setItem('access', tokens.access);
          localStorage.setItem('refresh', tokens.refresh);
        })
      );
    }

    // =========================== GET ===============================
    // ici je recup le token :string|null car il peu être vide AVANT connexion ofc.. si je met sun paramétre c'est chiant pour la suite
    getToken(): string | null {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('access');
      }
      return null;
    }

    saveToken(token: string) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('access', token);
      }
    }


    getTokenPayload(){
      const token = this.getToken()
      if(token){
        const elements = token.split('.')
        return JSON.parse(atob(elements[1]))
      }
      return null
    }

    getHeaders(): HttpHeaders {
      const token = this.getToken();
      return new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
    }


    // =========================== Verification  ===============================
    isLoggedIn(): boolean {
      const token = this.getToken()
      return !! token
    }

    logout() {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      this.router.navigate(['/login']);
    }
    
   
}

