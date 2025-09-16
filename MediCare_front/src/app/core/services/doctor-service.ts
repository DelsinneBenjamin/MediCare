import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:8000/api/users';
  
  private http = inject(HttpClient)
  private authService = inject(AuthService)
  
  linkPatientToDoctor(patient: number | null, doctor: number | null): Observable<any> {
      const headers = this.authService.getHeaders();

      // ici j'aurais pu faire, mais avoir un const me permet plus de flexibilité par la suite si je dois modifier etc..
      // return this.http.post(`${this.apiUrl}/link-patient-doctor/`, {patient_id: patient,doctor_id: doctor}, { headers });

      const payload = {
        patient_id: patient,
        doctor_id: doctor
      };

      return this.http.post(`${this.apiUrl}/link-patient-doctor/`, payload, { headers });
    }

}
