import { Component, inject, input, OnInit, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserService } from '../../core/services/user-service';
import { DoctorService } from '../../core/services/doctor-service';

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
  linking= signal<boolean>(false);

  protected readonly currentUser = this.userService.currentUser;   // signal qui est partager de doctorLayout
  protected readonly currentId = this.userService.currentId;

  isSucess = false;

  ngOnInit(): void {
    this.getAllPatient();
  }

  getAllPatient() {
  this.userService.getAllPatient().subscribe({
    next: (users) => {
      this.users.set(users);
      console.log("Liste des patients:", this.users());
    },
    error: (err) => {
      console.error('Erreur de récupération des patients: ', err);
    }
  })
}


  linkPatient(patientId: number){
    if(!this.currentId){
      console.error("Aucun docteur courrant (probleme currentUser)");
      return;
    }
    this.linking.set(true);

      this.doctorService.linkPatientToDoctor(patientId).subscribe({
        next: (res) => {
          console.log(`Patient ${patientId} lié au docteur ${this.currentId()} avec succès`, res);
          this.linking.set(true);
          this.getAllPatient()
        },
        error: (err) => {
          this.linking.set(false);
        },
        complete: () => {
          this.linking.set(false);
          this.isSucess = true
        }
      });
  }

}
