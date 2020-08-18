import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Bring in the FormsModule and the ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Bring in the ng2searchpipemodule
import { Ng2SearchPipeModule } from 'ng2-search-filter' ;

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateComponent } from './components/create/create.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamBioComponent } from './components/team-bio/team-bio.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    CreateComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    TeamBioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    Ng2SearchPipeModule,
    AppRoutingModule
=======
    AppRoutingModule,
>>>>>>> 873bc3cc00433b295a5bf1f8c6393b3465f1395a
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
