import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TeamBioComponent } from './components/team-bio/team-bio.component';


const routes: Routes = [
  { path: ' ', redirectTo: 'city-care/home', pathMatch: 'full' },
  { path: 'city-care/home', component: HomeComponent },
  { path: 'city-care/user-registration', component: RegistrationComponent },
  { path: 'city-care/user-login', component: LoginComponent },
  { path: 'city-care/about-us', component: TeamBioComponent },
  { path: '* *', component: HomeComponent } //If no matching route is found, go back to the home page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
