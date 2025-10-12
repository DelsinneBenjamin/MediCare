import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
    patientId = signal<number | null>(null);

    patient = signal<User | null>(null);
}
