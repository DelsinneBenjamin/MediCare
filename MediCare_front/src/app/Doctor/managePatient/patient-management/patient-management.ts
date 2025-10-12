import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { DoctorService } from '../../../core/services/doctor-service';
import { PatientService } from '../../../core/services/patient-service';

@Component({
  selector: 'app-patient-management',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './patient-management.html',
  styleUrl: './patient-management.css'
})
export class PatientManagement implements OnInit {
  patient = signal<User | null>(null); // les données du patient
  patientId = signal<number | null>(null); // l'ID du patient selectionner dans doctor-list-patient
  private doctorService = inject(DoctorService);
  private patientService = inject(PatientService);
  private route = inject(ActivatedRoute);
  
  test = this.patientService.patientId();

  // ici je recup l'ID passé en parametre..  je le mets dans getPatient pour récup ses informations..
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('patientId');
    if (idParam) {
      const id = +idParam; // ici je transforme l'ID string en number avec +
      this.patientId.set(id); // Je set mon signalID pour
      console.log("PatientId reçu :", this.patientId());
      
      this.patientId.set(this.patientService.patientId());
      console.log("Test: ",this.test);

      // Attention ! : Ici je fait cette petite verification uniquement pour montrer que le signal à bien recup l'ID du patient ! 
      // this.getPatient(id); fonctionne parfaitement et je l'aurais utilisé de base.. (ça me servira de rappel par la suite) ==> Pour moi meilleur manière
      const userId = this.patientId(); // je dois mettre le signal dans une variable car
      if(userId !== null) {
        this.getPatient(userId)  // si je mets ici directement le patientId() en param il TS pense qu'il est null...  raison pour laquel je fait un if !== null
      }
    }
  });
}

  getPatient(id: number) {
    this.doctorService.getSelectedPatient(id).subscribe({
      next: (response) => {
        this.patient.set(response);
        this.patientId.set(this.patientService.patientId()); // ici je set patientID du service patient pour le réutilisé dans les autres composants du management
      },
      error: (err) => console.error('Erreur de récupération du patient:', err)
    });
  }
}
