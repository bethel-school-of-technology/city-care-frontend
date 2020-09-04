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

  createRequest(request: any) {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.post(`${this.api}/create`, request, {headers: header});
  }
//Update a users request
updateRequest(requestId: number, request: any): Observable <Request> {
  let token = localStorage.getItem('access-token');
  let header = new HttpHeaders().set('jwt', token);
  return this.http.put<Request>(`${this.api}/update/${requestId}`, request, { headers: header });
}
  //Get all of a users requests for goods or services for the profile page
  getUserRequests(): Observable <Request[]>{
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Request[]> (`${this.api}/requests/profile`, { headers: header });
  }
  getUsersRequests(): Observable <Request[]> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Request[]> (`${this.api}/requests/tally`, { headers: header });
  }
  //get all of the requests in the database
  // getAllUserRequests(): Observable<Request[]> {
  //   let token = localStorage.getItem('access-token');
  //   let header = new HttpHeaders().set('jwt', token);
  //   return this.http.get<Request[]>(`${this.api}/`, { headers: header });
  // }

  //Get a single request made by an individual for the update request page
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
 //get the requests and the user for the site tally page
 getRequestInformation() {
  let token = localStorage.getItem('access-token');
  let header = new HttpHeaders().set('jwt', token);
  return this.http.get(`${this.api}/getRequestInformation`, { headers: header});
}
}