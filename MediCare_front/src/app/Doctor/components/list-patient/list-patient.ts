import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../../core/services/user-service';
import { DoctorService } from '../../../core/services/doctor-service';
import { Filter, FilterOption } from '../../../shared/filter/filter';
import { Router, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-list-patient',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    Filter
  ],
  templateUrl: './list-patient.html',
  styleUrl: './list-patient.css'
})
export class ListPatient implements OnInit{
  
  private userService = inject(UserService)
  private doctorService = inject(DoctorService)
  private router = inject(Router)

  filterField$ = signal<string>('first_name');
  filterValue$ = signal<string>('');
  users = signal<User[]>([]);
  linkingPatientId = signal<number | null>(null);

  prevUrl: string | null = null;
  nextUrl: string | null = null;

  protected readonly currentUser = this.userService.currentUser;
  protected readonly currentId = this.userService.currentId;

  isSucess = false;

  filterOptions: FilterOption[] = [
    { label: 'Prénom', value: 'first_name' },
    { label: 'Nom', value: 'last_name' },
    { label: 'Email', value: 'email' },
    { label: 'Nationnal_number', value: 'patient__nationnal_number'}
  ];
  

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients(url?: string) {
    const filters: any = {};
    const field = this.filterField$();
    const value = this.filterValue$().trim();
    if (field && value) filters[field] = value;

    this.userService.getAllPatient(url, filters).subscribe(res => {
      this.users.set(res.results);
      this.prevUrl = res.previous;
      this.nextUrl = res.next;
    });
  }

  goToPatientManagement(patientId: number) {
    this.router.navigate(['/doctor/patient', patientId]);
  }



  linkPatient(patientId: number){
    if(!this.currentId()){
      console.error("Aucun docteur courrant (probleme currentUser)");
      return;
    }

    this.linkingPatientId.set(patientId);

      this.doctorService.linkPatientToDoctor(patientId).subscribe({
        next: (res) => {
          console.log(`Patient ${patientId} lié au docteur ${this.currentId()} avec succès`, res);
          this.linkingPatientId.set(null);
          this.getAllPatients()
        },
        error: (err) => {
          this.linkingPatientId.set(null);
        }
      });
  }

  unlinkPatient(patientId: number){
    if(!this.currentId()){
      console.error("Aucun docteur courrant(probleme currentUser");
      return;
    }
    
    this.doctorService.unlinkPatientOfDoctor(patientId).subscribe({
      next: (res) => {
        console.log(`Patient ${patientId} délié du docteur ${this.currentId()} avec succès`, res);
        this.getAllPatients();
        this.linkingPatientId.set(null);
      },
      error: (err) => {
        this.linkingPatientId.set(null)
      }
    })

  }



  goNext() { if (this.nextUrl) this.getAllPatients(this.nextUrl); }
  goPrev() { if (this.prevUrl) this.getAllPatients(this.prevUrl); }


  onFilterChanged(event: { field: string; value: string }) {
    this.filterField$.set(event.field);
    this.filterValue$.set(event.value);
    this.getAllPatients();
  }


}
