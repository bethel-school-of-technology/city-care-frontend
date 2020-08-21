import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TeamBioComponent } from './components/team-bio/team-bio.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'home', pathMatch: 'full' },
  { path: 'city-care/home', component: HomeComponent },
  { path: 'city-care/user-registration', component: RegistrationComponent },
  { path: 'city-care/user-login', component: LoginComponent },
  { path: 'city-care/about-us', component: TeamBioComponent },
  { path: 'city-care/users-profile', component: ProfileComponent },
  { path: 'city-care/search', component: SearchComponent },
  { path: '* *', component: HomeComponent }, //If no matching route is found, go back to the home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
