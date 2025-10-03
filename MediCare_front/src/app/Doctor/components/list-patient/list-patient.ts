import { Component, inject, input, OnInit, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserService } from '../../../core/services/user-service';
import { DoctorService } from '../../../core/services/doctor-service';

@Component({
  selector: 'app-list-patient',
  standalone: true,
  imports: [],
  templateUrl: './list-patient.html',
  styleUrl: './list-patient.css'
})
export class ListPatient implements OnInit{
  
  private userService = inject(UserService)
  private doctorService = inject(DoctorService)

  users = signal<User[]>([]);
  linkingPatientId= signal<number | null>(null);
  prevUrl: string | null = null;
  nextUrl: string | null = null;

  protected readonly currentUser = this.userService.currentUser;   // signal qui est partager de doctorLayout
  protected readonly currentId = this.userService.currentId;

  isSucess = false;

  ngOnInit(): void {
    this.getAllPatient();
  }

  getAllPatient(url?: string) {
  this.userService.getAllPatient(url).subscribe({  
    next: (response) => {
      console.log("Réponse brute API:", response);
      this.users.set(response.results);
      this.prevUrl = response.previous;
      this.nextUrl = response.next;
      console.log("Patients mis à jour:", this.users());
    },
    error: (err) => {
      console.error('Erreur de récupération des patients: ', err);
    }
  })
}



  linkPatient(patientId: number){
    if(!this.currentId()){
      console.error("Aucun docteur courrant (probleme currentUser)");
      return;
    }

    this.linkingPatientId.set(patientId);

      this.doctorService.linkPatientToDoctor(patientId).subscribe({
        next: (res) => {
          console.log(`Patient ${patientId} lié au docteur ${this.currentId()} avec succès`, res);
          this.linkingPatientId.set(null);
          this.getAllPatient()
        },
        error: (err) => {
          this.linkingPatientId.set(null);
        }
      });
  }

  unlinkPatient(patientId: number){
    if(!this.currentId()){
      console.error("Aucun docteur courrant(probleme currentUser");
      return;
    }
    
    this.doctorService.unlinkPatientOfDoctor(patientId).subscribe({
      next: (res) => {
        console.log(`Patient ${patientId} délié du docteur ${this.currentId()} avec succès`, res);
        this.getAllPatient();
        this.linkingPatientId.set(null);
      },
      error: (err) => {
        this.linkingPatientId.set(null)
      }
    })

  }

  goNext(): void {
    if(this.nextUrl){
      this.getAllPatient(this.nextUrl)
    }
  }

  goPrev(): void {
    if(this.prevUrl){
      this.getAllPatient(this.prevUrl)
    }
  }

}
