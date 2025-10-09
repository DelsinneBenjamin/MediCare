import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import { UserService } from '../../../core/services/user-service';
import { Footer } from '../../../shared/components/footer/footer';

@Component({
  selector: 'app-landing-page',
  imports: [Navbar,Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage implements OnInit {

  private userService = inject(UserService)
  isOpen: boolean = false;
  doctors: User[] = [];

  ngOnInit(): void {
    this.getDoctor();
  }
  
  getDoctor() {
  this.userService.getAllDoctor().subscribe({
    next: (result) => {
      this.doctors = result;
      console.log(this.doctors)
    },
    error: (err) => {
      console.error('Erreur récupération docteur:', err);
    }
  });
}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
