import { Routes } from '@angular/router';
import { Login } from './authentification/login/login';
import { LandingPage } from './features/Landing/landing-page/landing-page';
import {ListPatient} from './Doctor/list-patient/list-patient';
import {AddPatient} from './Doctor/add-patient/add-patient';
import { DoctorLayout } from './Doctor/doctor-layout/doctor-layout';
import { PatientLayout } from './Patient/patient-layout/patient-layout';
import { ListOrdonnance } from './Patient/list-ordonnance/list-ordonnance';


export const routes: Routes = [
    { path: '', component: LandingPage, pathMatch: 'full' },
    { path: 'login', component: Login },

    { path: 'doctor', component: DoctorLayout, children: [
        {path: 'add-patient', component: AddPatient },
        {path: 'list-patient', component: ListPatient },
      ]},

      
    { path: 'patient', component: PatientLayout, children: [
       {path: 'list-ordonnance', component: ListOrdonnance}
    ]}
];
