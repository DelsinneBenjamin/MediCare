import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { Router } from '@angular/router';
import { UserData } from '../../core/interfaces/user';

@Component({
  selector: 'app-doctor-home',
  imports: [],
  templateUrl: './doctor-home.html',
  styleUrl: './doctor-home.css'
})
export class DoctorHome implements OnInit {

  constructor(private http: HttpClient, private authService: Auth, private readonly router:Router) { }

  // #ici je déclare USER comment uen variable qui contient les données de mon utilisateur connecté
  // # Il est nul car au départ, avant de récupérer les données, il n'y a pas d'utilisateur
  user : UserData | null = null;

    ngOnInit(): void {
    }
    
  logout() {
    this.authService.logout();
  }

}
