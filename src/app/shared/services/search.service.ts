import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../models/listing.model';
import { Request } from '../models/request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

api: string = 'http://localhost:3000/search';
requestsArray: Array<any> = [];
listingsArray: Array<any> = [];

constructor(
  private http: HttpClient
  ) {}
  getListings(): Observable <Listing[]> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Listing[]>(`${this.api}/listings`, {headers: header});
  }
  getRequests(): Observable <Request[]> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Request[]>(`${this.api}/requests`, {headers: header});
  }
}
