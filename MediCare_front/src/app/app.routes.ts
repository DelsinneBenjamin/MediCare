import { Routes } from '@angular/router';
import { Login } from './authentification/login/login';
import { LandingPage } from './features/Landing/landing-page/landing-page';
import {ListPatient} from './Doctor/components/list-patient/list-patient';
import { DoctorLayout } from './Doctor/components/doctor-layout/doctor-layout';
import { PatientLayout } from './Patient/components/patient-layout/patient-layout';
import { ListOrdonnance } from './Patient/components/list-ordonnance/list-ordonnance';
import { Profile } from './shared/components/profile/profile';
import { PatientManagement } from './Doctor/managePatient/patient-management/patient-management';


export const routes: Routes = [
    { path: '', component: LandingPage, pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'profile', component: Profile},
    { path: 'doctor', component: DoctorLayout, children: [
        { path: '', redirectTo: 'profile', pathMatch: 'full' },
        {path: 'profile', component: Profile},
        {path: 'list-patient', component: ListPatient },
        { path: 'patient-management/:patientId', component: PatientManagement },
          
      ]},

      
    { path: 'patient', component: PatientLayout, children: [
      {path: 'list-ordonnance', component: ListOrdonnance}
    ]}
];
