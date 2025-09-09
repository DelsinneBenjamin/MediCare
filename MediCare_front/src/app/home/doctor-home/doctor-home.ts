import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../core/services/user-service';
import { AuthService } from '../../core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-home',
  imports: [],
  templateUrl: './doctor-home.html',
  styleUrl: './doctor-home.css'
})
export class DoctorHome {
  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService ,private readonly router:Router) { }
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
