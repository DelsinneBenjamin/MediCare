import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';
import { UserService } from '../../core/services/user-service';
import { DoctorService } from '../../core/services/doctor-service';

@Component({
  selector: 'app-doctor-layout',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './doctor-layout.html',
  styleUrl: './doctor-layout.css'
})
export class DoctorLayout implements OnInit{
  
  private authService = inject(AuthService)
  private userService = inject(UserService)
  private readonly router = inject(Router)
  protected readonly currentUser = this.userService.currentUser;
  
   ngOnInit(): void {
    this.getCurrentUser();
    console.log("CURRENT USER DLAYOUT",this.currentUser())
   }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        this.userService.setCurrentUser(user);
      },
      error: (err) => {
        console.error('Erreur récupération utilisateur :', err);
      }
    });
  }



  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
 }