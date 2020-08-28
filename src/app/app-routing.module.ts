import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/services/auth.guard';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TeamBioComponent } from './components/team-bio/team-bio.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { UpdateRequestComponent } from './components/update-request/update-request.component';
import { UpdateListingComponent } from './components/update-listing/update-listing.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';

//Protected all the routes with can activate route protection

const routes: Routes = [
  { path: ' ', redirectTo: '/', pathMatch: 'full' },
  { path: 'city-care/home', component: HomeComponent },
  { path: 'city-care/user-registration', component: RegistrationComponent },
  { path: 'city-care/user-login', component: LoginComponent },
  { path: 'city-care/about-us', component: TeamBioComponent  },
  { path: 'city-care/users-profile', component: ProfileComponent },
  { path: 'city-care/site-search', component: SearchComponent  },
  { path: 'city-care/update-request/:id', component: UpdateRequestComponent  },
  { path: 'city-care/update-listing/:id', component: UpdateListingComponent  },
  { path: 'city-care/update-profile/:id', component: ProfileEditorComponent  },
  { path: '* *', component: HomeComponent }, //If no matching route is found, go back to the home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
