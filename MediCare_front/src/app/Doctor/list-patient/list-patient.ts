import { Component, inject, OnInit, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-list-patient',
  standalone: true,
  imports: [],
  templateUrl: './list-patient.html',
  styleUrl: './list-patient.css'
})
export class ListPatient implements OnInit{
  users = signal<User[]>([]);
  isLinking = false;
  private userService = inject(UserService)
  protected readonly currentUser = this.userService.currentUser;   // signal qui est partager de doctorLayout

  ngOnInit(): void {
    this.getAllPatient();
    console.log(this.users);
    console.log("CURRENT USER via list patient", this.currentUser())
  }

  getAllPatient() {
    this.userService.getAllPatient().subscribe({
      next: (users) => this.users.set(users),
      error: (err) => {
        console.error('Erreur de récupération des patients: ', err);
      }
    })
  }

}
