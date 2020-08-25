import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {

  api: string = 'http://localhost:3000/users';

  private isLoading = false;
  public users: User[];
  
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}  

get isLoggedIn(): boolean {
  let authToken = localStorage.getItem('access-token');
  return(authToken !== null) ? true: false;
}
//Register a user
registerUser(){

}
//Log a user in 
login(user: any) {
  return this.http.post(`${this.api}/login`, user);
}



  //Get a user/organization profile
  getProfile(userId: number): Observable<User> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<User>(`${this.api}/profile`, { headers: header });
  }




}
