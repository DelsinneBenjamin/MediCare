import { Component, inject, OnInit, signal } from '@angular/core';
import { PatientService } from '../../../core/services/patient-service';

@Component({
  selector: 'app-patient-add-ordonnance',
  imports: [],
  templateUrl: './patient-add-ordonnance.html',
  styleUrl: './patient-add-ordonnance.css'
})
export class PatientAddOrdonnance implements OnInit{
  private patientService = inject(PatientService);
  patientId = this.patientService.patientId;
  
    ngOnInit(): void {
      console.log("Patient ID  ordonnance : ",this.patientId())
     }
}
