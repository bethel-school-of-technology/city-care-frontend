import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../models/request.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})

export class RequestService {

  api: string = 'http://localhost:3000/requests';

  public requests: Request[];
      

  constructor(
    private http: HttpClient, 
    ) {}
//CREATE a user request
  createRequest(request: any) {
    // let token = localStorage.getItem('access-token');
    // let header = new HttpHeaders().set('jwt', token);
    return this.http.post(`${this.api}/create`, request);
  }
//UPDATE a users request
updateRequest(requestId: number, request: any): Observable <Request> {
  // let token = localStorage.getItem('access-token');
  // let header = new HttpHeaders().set('jwt', token);
  return this.http.put<Request>(`${this.api}/update/${requestId}`, request);
}
  //GET all of a users requests for goods or services for the profile page
  getUserRequests(): Observable <Request[]>{
    // let token = localStorage.getItem('access-token');
    // let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Request[]> (`${this.api}/requests/profile`);
  }
  //GET a single request made by an individual for the update request page
  getUserRequest(requestId): Observable<Request> {
    // let token = localStorage.getItem('access-token');
    // let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Request>(`${this.api}/${requestId}`);
  }
  //Delete a request from the from the database
  deleteRequest(requestId: number): Observable<Request> {
    // let token = localStorage.getItem('access-token');
    // let header = new HttpHeaders().set('jwt', token);
    return this.http.delete<Request>(`${this.api}/delete/${requestId}`);
  }
  //GET all of the users and their requests for the site tally page
getEverythingUsers(): Observable <User[]> {
  // let token = localStorage.getItem('access-token');
  // let header = new HttpHeaders().set('jwt', token);
  return this.http.get<User[]>(`${this.api}/findUsers`);
 } 
}