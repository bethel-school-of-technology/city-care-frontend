import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//Bring in the FormsModule and the ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Import ngselectmodule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Bring in the ng2searchpipemodule
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamBioComponent } from './components/team-bio/team-bio.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { UpdateRequestComponent } from './components/update-request/update-request.component';
import { UpdateListingComponent } from './components/update-listing/update-listing.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    TeamBioComponent,
    CreateRequestComponent,
    UpdateRequestComponent,
    UpdateListingComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
