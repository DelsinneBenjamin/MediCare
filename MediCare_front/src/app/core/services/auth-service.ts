import {inject, Injectable, signal} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenResponse } from '../interfaces/tokenResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/users/';   // url de l'API

  isLoggedIn = signal<boolean>(false);
  private http = inject(HttpClient)
  private router = inject(Router)


  
  // =========================== Login + Register  ===============================
  
  updateLoginStatus() {
    const token = this.getToken();
    this.isLoggedIn.set(!!token);
    console.log(this.isLoggedIn())
  }

  register(data: User): Observable<{ tokens: TokenResponse }> {
    return this.http.post<{ tokens: TokenResponse }>(`${this.apiUrl}register/`, data).pipe(
        tap(res => {
          localStorage.setItem('access', res.tokens.access);
          localStorage.setItem('refresh', res.tokens.refresh);
          this.isLoggedIn.set(true);
          this.updateLoginStatus();
        })
      );
    }

    login(data: { email: string; password: string }): Observable<{ access: string; refresh: string, role: string}> {
      return this.http.post<{ access: string; refresh: string , role: string, user: User}>(`${this.apiUrl}login/`, data).pipe(
        tap(response => {
          localStorage.setItem('access', response.access);
          localStorage.setItem('refresh', response.refresh);

          this.isLoggedIn.set(true);
          this.updateLoginStatus();

          const role = response.user?.role;

         if (role === 'doctor') {
            this.router.navigate(['/doctor']);
          } else if (role === 'patient') {
            this.router.navigate(['/patient']);
          } else {
            this.router.navigate(['/']);
          }
          
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
    logout() {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      this.isLoggedIn.set(false);
      this.router.navigate(['/login']);
    }
}
