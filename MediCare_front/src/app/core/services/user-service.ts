import { Observable } from "rxjs";
import { AuthService } from "./auth-service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient, private authService: AuthService) {}
 
    getAllUser(): Observable<User[]> {

      const headers = this.authService.getHeaders();

      return this.http.get<User[]>(`${this.apiUrl}/users`, { headers });
    }

    getCurrentUser(): Observable<User> {
      const headers = this.authService.getHeaders();
      return this.http.get<User>(`${this.apiUrl}/me/`, { headers });
    }

}
