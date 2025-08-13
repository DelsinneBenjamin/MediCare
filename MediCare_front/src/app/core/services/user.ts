import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {

  private apiUrl = 'http://localhost:8000/';   // url de l'API

  // Add methods for user-related operations here, e.g., fetching user profile, updating user data, etc.
  
  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}user/profile/`);
  }
  
  updateUserProfile(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}user/profile/`, data);
  }

}