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
  //get all of the listings 
  getAllUserListings(): Observable<Listing[]> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Listing[]>(`${this.api}/all/listings`, {headers: header});
  }
  // Delete an orgs listing
  deleteListing(listingId: number): Observable<Listing> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.delete<Listing>(`${this.api}/${listingId}`, { headers: header });
  }
  //Get a organizations listing by the listing id
  getUserListing(listingId): Observable <Listing> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.get<Listing>(`${this.api}/${listingId}`, {headers: header});
  }

  //Create listing
  createListing(listing: Listing): Observable <Listing> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.post<Listing>(`${this.api}/create`, listing, {headers: header});
  }
  //Update listing
  updateListing(listingId: number, listing: any): Observable <Listing> {
    let token = localStorage.getItem('access-token');
    let header = new HttpHeaders().set('jwt', token);
    return this.http.put<Listing>(`${this.api}/${listingId}`, listing, {
      headers: header,
    });
  }
}
