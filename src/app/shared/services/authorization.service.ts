import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {


  userApi: string = 'http://localhost:3000/users';


  public users: User[];

  constructor(private http: HttpClient, public router: Router) { }
  //Register a user
  registerUser() { }

  getLogin() {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get(`${this.userApi}/login`, { headers: header })
  }

  login(user: any) {
    return this.http.post(`${this.userApi}/login`, user)
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access-token');
    return (authToken !== null) ? true : false
  }

  getProfile() { }
}
