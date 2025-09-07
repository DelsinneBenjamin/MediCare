import { HttpClient, HttpHeaders, HttpXsrfTokenExtractor, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TokenResponse } from '../interfaces/tokenResponse';
import { catchError } from 'rxjs/operators';
import { Auth } from './auth';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient, private authService: Auth) {}
 
    getAllUser(): Observable<User[]> {

      const headers = this.authService.getHeaders();

      return this.http.get<User[]>(`${this.apiUrl}/users`, { headers });
    }

    getCurrentUser(): Observable<User> {
      const headers = this.authService.getHeaders();
      return this.http.get<User>(`${this.apiUrl}/me/`, { headers });
    }

}
