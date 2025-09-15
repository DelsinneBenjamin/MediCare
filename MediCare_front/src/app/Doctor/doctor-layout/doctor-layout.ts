import { Component, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-doctor-layout',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './doctor-layout.html',
  styleUrl: './doctor-layout.css'
})
export class DoctorLayout implements OnInit{

  currentUser = signal<User | null>(null);
  
  constructor(private authService: AuthService,
              private userService: UserService,
              private readonly router:Router) {
                effect(() => {
                  const userValeur = this.currentUser();
                  console.log(userValeur)
                })
               }
  
   ngOnInit(): void {
    this.getCurrentUser();
    console.log(this.currentUser);
   }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: (user) => this.currentUser.set(user), // Je mets à jour le signal + je mets user dans currentUser
      error: (err) => {
        console.error('Erreur récupération utilisateur :', err);
      }
    });
    console.log(this.currentUser())
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
 }