import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';
import { UserService } from '../../../core/services/user-service';
import { Profile } from '../../../shared/components/profile/profile';

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
  protected readonly currendId = this.userService.currentId;

   ngOnInit(): void {
    this.getCurrentUser();
   }
  
  getCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
       this.userService.setCurrentUser(user);
   
        console.log("CurentUser ICI",this.currentUser(),
        console.log("CurentID ICI",this.currendId())
      )

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