import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Organization } from '../models/organization.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  orgApi: string = 'http://localhost:3000/orgs';
  userApi: string = 'http://localhost:3000/users';

  public organizations: Organization[];
  public users: User[];

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }
//Register a user
registerUser() {

}
login() {

}
getProfile() {

}


}
