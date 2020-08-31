import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/services/auth.guard';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TeamBioComponent } from './components/team-bio/team-bio.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateRequestComponent } from './components/update-request/update-request.component';
import { UpdateListingComponent } from './components/update-listing/update-listing.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { RequestComponent } from './components/request/request.component';
import { ListingComponent } from './components/listing/listing.component';
import { SiteTallyComponent } from './components/site-tally/site-tally.component';
import { ViewListingComponent } from './components/view-listing/view-listing.component';
import { ViewRequestComponent } from './components/view-request/view-request.component';
import { EmailLoginComponent } from './components/email-login/email-login.component';
import { UsernameLoginComponent } from './components/username-login/username-login.component';

//Protected all the routes with can activate route protection

const routes: Routes = [
  { path: ' ', redirectTo: '/city-care/home', pathMatch: 'full' },
  { path: 'city-care/home', component: HomeComponent },
  { path: 'city-care/user-registration', component: RegistrationComponent },
  { path: 'city-care/user-login', component: LoginComponent },
  { path: 'city-care/email-login', component: EmailLoginComponent }, 
  { path: 'city-care/username-login', component: UsernameLoginComponent },
  { path: 'city-care/about-us', component: TeamBioComponent  },
  { path: 'city-care/users-profile', component: ProfileComponent },
  { path: 'city-care/create-request', component: RequestComponent },
  { path: 'city-care/create-listing', component: ListingComponent },
  { path: 'city-care/update-request/:id', component: UpdateRequestComponent  },
  { path: 'city-care/update-listing/:id', component: UpdateListingComponent  },
  { path: 'city-care/view-listing/:id', component: ViewListingComponent },
  { path: 'city-care/view-request/:id', component: ViewRequestComponent },
  { path: 'city-care/update-profile/:id', component: ProfileEditorComponent  },
  { path: 'city-care/site-postings', component: SiteTallyComponent },
  //{ path: 'city-care/listing/', component: ListingComponent },
  { path: '* *', component: HomeComponent }, //If no matching route is found, go back to the home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
