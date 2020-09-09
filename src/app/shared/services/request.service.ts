import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Request } from '../models/request.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { User } from '../models/user.model';
import { ListingService } from './listing.service';
/* import { User } from '../models/user.model';
 */
@Injectable({
  providedIn: 'root',
})

export class RequestService {

  api: string = 'http://localhost:3000/requests';

/*   public users: User[];
 */  public requests: Request[];
      

  constructor(
    private http: HttpClient, 
    private router: Router
    ) {}
//CREATE a user request
  createRequest(request: any) {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.post(`${this.api}/create`, request, {headers: header});
  }
//UPDATE a users request
updateRequest(requestId: number, request: any): Observable <Request> {
  let token = localStorage.getItem('access-token');
  let header = new HttpHeaders().set('jwt', token);
  return this.http.put<Request>(`${this.api}/update/${requestId}`, request, { headers: header });
}
  //GET all of a users requests for goods or services for the profile page
  getUserRequests(): Observable <Request[]>{
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Request[]> (`${this.api}/requests/profile`, { headers: header });
  }
  //GET a single request made by an individual for the update request page
  getUserRequest(requestId): Observable<Request> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Request>(`${this.api}/${requestId}`, { headers: header });
  }
  //Delete a request from the from the database
  deleteRequest(requestId: number): Observable<Request> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.delete<Request>(`${this.api}/delete/${requestId}`, { headers: header });
  }
  //GET all of the users and their requests for the site tally page
getEverythingUsers(): Observable <User[]> {
  let token = localStorage.getItem('access-token');
  let header = new HttpHeaders().set('jwt', token);
  return this.http.get<User[]>(`${this.api}/findUsers`, { headers: header});
 } 
}