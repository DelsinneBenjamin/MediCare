import { Observable } from "rxjs";
import { AuthService } from "./auth-service";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/users';

  currentUser = signal<User | null>(null);
  
  private http = inject(HttpClient)
  private authService = inject(AuthService)


  getAllUser(): Observable<User[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<User[]>(`${this.apiUrl}/all`, { headers });
  }

  getAllPatient(): Observable<User[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<User[]>(`${this.apiUrl}/role/patient`, {headers});
  }

  getAllDoctor(): Observable<User[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<User[]>(`${this.apiUrl}/role/doctor`, {headers});
  }

  getCurrentUser(): Observable<User> {
    const headers = this.authService.getHeaders();
    return this.http.get<User>(`${this.apiUrl}/me/`, { headers });
  }

  setCurrentUser(user: User | null){
    this.currentUser.set(user)
  }

  getCurrentUserId(): number | null {
    return this.currentUser()?.id ?? null;
  }

}

