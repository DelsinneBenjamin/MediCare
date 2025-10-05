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


//  ====================== GET ALL - Filtrer et Paginée ========================

    getAllUser(url: string = this.apiUrl, filter?: any): Observable<pagination<User>> {
      const headers = this.authService.getHeaders();
      return this.http.get<pagination<User>>(`${this.apiUrl}/`, { headers, params: filter });
    }

    getAllPatient(url: string = `${this.apiUrl}/by-role/patient`, filter?: any): Observable<pagination<User>> {
      const headers = this.authService.getHeaders();
      return this.http.get<pagination<User>>(url, { headers, params: filter });
    }

    getAllDoctor(): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiUrl}/by-role/doctor`);
    }

//  ===========================================================================

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

