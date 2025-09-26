import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { Observable, throwError } from 'rxjs';
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:8000/api/doctors';
  
  private http = inject(HttpClient)
  private authService = inject(AuthService)
  private userService = inject(UserService)

  protected readonly doctorId = this.userService.currentId;
  
  linkPatientToDoctor(patient: number | null): Observable<any> {
    const headers = this.authService.getHeaders();
    const currentDoctorId = this.userService.currentId();

    if (!currentDoctorId) {
      return throwError(() => new Error('Aucun médecin connecté.'));
    }

    const payload = {
      patient_id: patient,
      doctor_id: currentDoctorId
    };

    return this.http.post(`${this.apiUrl}/${currentDoctorId}/link/`, payload, { headers });
  }

}
