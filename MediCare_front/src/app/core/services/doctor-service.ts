import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
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

  chosenPatientId = signal<number| null>(null);

  protected readonly doctorId = this.userService.currentId;


  getPatient(id: number): Observable<User> {
    const headers = this.authService.getHeaders();
    this.chosenPatientId.set(id);
    return this.http.get<User>(`http://localhost:8000/api/users/${id}/`, { headers });
  }
  
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

  unlinkPatientOfDoctor(patient: number | null): Observable<any> {
    const headers = this.authService.getHeaders();
    const currentDoctorId = this.userService.currentId();

    if (!currentDoctorId) {
      return throwError(() => new Error('Aucun médecin connecté.'));
    }

    const payload = {
      patient_id: patient,
      doctor_id: currentDoctorId
    };

    return this.http.post(`${this.apiUrl}/${currentDoctorId}/unlink_patient/`, payload, { headers });

  }

}
