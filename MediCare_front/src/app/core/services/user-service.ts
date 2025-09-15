import { Observable } from "rxjs";
import { AuthService } from "./auth-service";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/users';

  private http = inject(HttpClient)
  private authService = inject(AuthService)


    getAllUser(): Observable<User[]> {
      const headers = this.authService.getHeaders();
      return this.http.get<User[]>(`${this.apiUrl}/all`, { headers });
    }

    getCurrentUser(): Observable<User> {
      const headers = this.authService.getHeaders();
      return this.http.get<User>(`${this.apiUrl}/me/`, { headers });
    }

    linkPatientToDoctor(patient: number | null, doctor: number | null) {
      
    }

}
