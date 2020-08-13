import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { AuthData } from '../auth/auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private UserId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  //Get the token
  getToken() {
    return this.token;
  }
  //Get the User Id
  getUserId() {
    return this.UserId;
  }
  //Check the users status ie logged in or not
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
//Register a user
registerUser(FirstName: string, LastName: string, Email: string, ) {

}
login() {

}
}
