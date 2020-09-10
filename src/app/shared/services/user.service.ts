import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersApi: string = 'http://localhost:3000/users';//Define the backend route
  
   public user: User[];


  constructor(private http: HttpClient) { }

   //GET a user/organization profile
   getProfile(userId: number): Observable<User> {
    // let token = localStorage.getItem('access-token');
    // let header = new HttpHeaders().set('jwt', token);
    return this.http.get<User>(`${this.usersApi}/profile`)
  }
  //GET the user by the user id for the update profile page
  getUser(userId: number): Observable<User> {
    // let token = localStorage.getItem('access-token');
    // let header = new HttpHeaders().set('jwt', token);
    return this.http.get<User>(`${this.usersApi}/${userId}`);
  }
//UPDATE a users/orgs information 
  updateUser(userId: number, user: any): Observable <User> {
    /* let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token); */
    return this.http.put<User>(`${this.usersApi}/${userId}`, user, );
  }
  getThisOrgUser(org_id: number): Observable <User> {
    // let token = localStorage.getItem('access-token');
    // let header = new HttpHeaders().set('jwt', token);
    return this.http.get<User>(`${this.usersApi}/${org_id}`)
  }
  getThisUser(userId: number): Observable <User> {
    // let token = localStorage.getItem('access-token');
    // let header = new HttpHeaders().set('jwt', token);
    return this.http.get<User>(`${this.usersApi}/${userId}`)
  }
}
