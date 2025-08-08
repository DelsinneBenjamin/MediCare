import { Routes } from '@angular/router';
import { Login } from './authentification/login/login';
import { LandingPage } from './features/Landing/landing-page/landing-page';

export const routes: Routes = [
    { path: '', component: LandingPage, pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'doctorHomePage', component: LandingPage}
];
