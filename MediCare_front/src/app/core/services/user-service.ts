import { Observable } from "rxjs";
import { AuthService } from "./auth-service";
import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/users';

  currentUser = signal<User | null>(null);
  currentId = computed(() => this.currentUser()?.id ?? null);
  
  private http = inject(HttpClient)
  private authService = inject(AuthService)


  getAllUser(): Observable<User[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<User[]>(`${this.apiUrl}/`, { headers });
  }

  getAllPatient(): Observable<User[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<User[]>(`${this.apiUrl}/by-role/patient`, {headers});
  }

  getAllDoctor(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/by-role/doctor`);
  }

  getCurrentUser(): Observable<User> {
    const headers = this.authService.getHeaders();
    return this.http.get<User>(`${this.apiUrl}/me/`, { headers });
  }

  setCurrentUser(user: User | null){ 
    this.currentUser.set(user)
  }

  getCurrentUserId(): number | null {
    const id = this.currentUser()?.id ?? null;
    return id;
  }

}

