import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Listing } from '../models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  api: string = 'http://localhost:3000/listings';

  public listings: Listing[];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  //Get all of an organizations listings 
  getUserListings(): Observable<Listing[]> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Listing[]>(`${this.api}/listings`, { headers: header });
  }
  // Delete an orgs listing
  deleteListing(id: number): Observable<Listing> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.delete<Listing>(`${this.api}/${id}`, { headers: header });
  }
  getUserListing(listingId): Observable <Listing> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Listing>(`${this.api}/${listingId}`, {headers: header});
  }
}
