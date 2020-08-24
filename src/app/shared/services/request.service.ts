import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '../models/request.model';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  api: string = "http://localhost:3000/requests";

  public requests: Request[];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  //Get all of a users requests for goods or services
  getUserRequests(): Observable <Request[]> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Request[]>(`${this.api}/requests`, { headers: header});
  }
  //Get a single request made by an individual
  getUserRequest(requestId): Observable <Request> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Request>(`${this.api}/${requestId}`, {headers: header});
  }
  //Delete a request from the UI and from the database
  deleteRequest(id: number): Observable <Request> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.delete<Request>(`${this.api}/${id}`, {headers: header});
  }
}
