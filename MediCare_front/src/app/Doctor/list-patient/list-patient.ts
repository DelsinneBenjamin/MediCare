import { Component, inject, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
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
  private userService = inject(UserService)

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.users);
  }

  getAllUsers() {
  this.userService.getAllUser().subscribe({
    next: (users) => this.users.set(users),
    error: (err) => {
      console.error('Erreur de récupération des patients: ', err);
    }
  });
}
}
