import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/services/auth';
import { Router } from '@angular/router';
import { UserService} from '../../core/services/user-service';

@Component({
  selector: 'app-doctor-home',
  imports: [CommonModule],
  templateUrl: './doctor-home.html',
  styleUrl: './doctor-home.css'
})
export class DoctorHome{

  constructor(private http: HttpClient, private authService: Auth, private userService: UserService ,private readonly router:Router) { }
  users: User[] = []
  currentUser?: User;

   ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.currentUser = user;
        console.log('Utilisateur courant:', user);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l’utilisateur courant', err);
      }
    });
  }
  
  logout() {
    this.authService.logout();
  }
  
  
}
