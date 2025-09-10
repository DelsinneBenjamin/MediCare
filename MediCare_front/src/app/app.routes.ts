import { Routes } from '@angular/router';
import { Login } from './authentification/login/login';
import { LandingPage } from './features/Landing/landing-page/landing-page';
import { DoctorHome } from './home/doctor-home/doctor-home';

export const routes: Routes = [
    { path: '', component: Login, pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'doctorHomePage', component: DoctorHome}
];
