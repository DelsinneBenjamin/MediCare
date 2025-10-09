import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DoctorService } from '../../../core/services/doctor-service';

@Component({
  selector: 'app-patient-management',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './patient-management.html',
  styleUrl: './patient-management.css'
})
export class PatientManagement implements OnInit {
  // patientId!: string;
  patient!: User;
  patientId = signal<number | null>(null);

  private doctorService = inject(DoctorService);
  private route = inject(ActivatedRoute);

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('patientId');
    if (idParam) {
      const id = +idParam;
      this.patientId.set(id);
      console.log("PatientId reçu :", this.patientId());
      this.getPatient(id);
    }
  });
}

  getPatient(id: number) {
    this.doctorService.getPatient(id).subscribe({
      next: (response) => {
        this.patient = response;
        this.patientId.set(this.doctorService.chosenPatientId());
        console.log('Patient reçu:', this.patientId);
      },
      error: (err) => console.error('Erreur de récupération du patient:', err)
    });
  }
}
