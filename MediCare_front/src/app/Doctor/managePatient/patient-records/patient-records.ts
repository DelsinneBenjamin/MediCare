import { Component, inject, signal } from '@angular/core';
import { DoctorService } from '../../../core/services/doctor-service';
import { PatientService } from '../../../core/services/patient-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-records',
  imports: [],
  templateUrl: './patient-records.html',
  styleUrl: './patient-records.css'
})
export class PatientRecords {

  private patientService = inject(PatientService);
  private DoctorService = inject(DoctorService)

  patientId = this.patientService.patientId
  records: any[] = [];

  constructor() {
    console.log("PatientID Service RECORDS", this.patientService.patientId())
    this.getOrdonnanceByPatient(this.patientId()!);
  }

  getOrdonnanceByPatient(patientId: number) {
    this.DoctorService.getOrdonnanceByPatient(patientId).subscribe({
      next: (response) => {
        this.records = response;
      }
    });
  }

}
