import { Routes } from '@angular/router';
import { Login } from './authentification/login/login';
import { DoctorHome } from './home/doctor-home/doctor-home';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'doctorHomePage', component: DoctorHome}
];
