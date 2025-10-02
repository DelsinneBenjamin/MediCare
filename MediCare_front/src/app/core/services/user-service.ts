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


  // getAllUser(): Observable<User[]> {
  //   const headers = this.authService.getHeaders();
  //   return this.http.get<User[]>(`${this.apiUrl}/`, { headers });
  // }

    getAllUser(url: string = this.apiUrl): Observable<pagination<User>> {
      const headers = this.authService.getHeaders();
      return this.http.get<pagination<User>>(`${this.apiUrl}/`, { headers });
    }

    getAllPatient(url: string = `${this.apiUrl}/by-role/patient`): Observable<pagination<User>> {
      const headers = this.authService.getHeaders();
      return this.http.get<pagination<User>>(url, { headers });
    }


  //   getAllPatient2(url?: string): Observable<pagination<User>> {
  //   const headers = this.authService.getHeaders();
  //   const endpoint = url ?? `${this.apiUrl}/by-role/patient`;
  //   return this.http.get<pagination<User>>(endpoint, { headers });
  // }

  //   getAllPatient(url?: string): Observable<pagination<User>> {
  //     const headers = this.authService.getHeaders();
  //     const endpoint = url ?? `${this.apiUrl}/by-role/patient`;
  //     return this.http.get<pagination<User>>(endpoint, { headers });
  //   }

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

