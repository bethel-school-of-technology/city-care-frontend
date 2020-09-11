import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../models/request.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})

export class RequestService {

  private requestApi: string = 'http://localhost:3000/requests';

  public requests: Request[];
      

  constructor(
    private http: HttpClient, 
    ) {}
//CREATE a user request
  createRequest(request: any) {
    return this.http.post(`${this.requestApi}/create`, request);
  }
//UPDATE a users request
updateRequest(requestId: number, request: any): Observable <Request> {
  return this.http.put<Request>(`${this.requestApi}/update/${requestId}`, request);
}
  //GET all of a users requests for goods or services for the profile page
  getUserRequests(): Observable <Request[]>{
    return this.http.get<Request[]> (`${this.requestApi}/requests/profile`);
  }
  //GET a single request made by an individual for the update request page
  getUserRequest(requestId): Observable<Request> {
    return this.http.get<Request>(`${this.requestApi}/${requestId}`);
  }
  //Delete a request from the from the database
  deleteRequest(requestId: number): Observable<Request> {
    return this.http.delete<Request>(`${this.requestApi}/delete/${requestId}`);
  }
  //GET all of the users and their requests for the site tally page
getEverythingUsers(): Observable <User[]> {
  return this.http.get<User[]>(`${this.requestApi}/findUsers`);
 } 
}