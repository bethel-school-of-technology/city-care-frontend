import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Org } from '../models/org.model';
import { Listing } from '../models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private listingApi: string = 'http://localhost:3000/listings';

  public org: Org[];
  public users: User[];
  public listings: Listing[];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  //GET all of  the listings made by an organization for the profile page
  getUserListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.listingApi}/listings`);
  }
  // DELETE an organizations listing
  deleteListing(listingId: number): Observable<Listing> {
    return this.http.delete<Listing>(`${this.listingApi}/delete/${listingId}`);
  }
  //GET a organizations listing by the listing id
  getUserListing(listingId: number): Observable <Listing> {
    return this.http.get<Listing>(`${this.listingApi}/listing/${listingId}`);
  }
  //CREATE an organization listing 
  createListing(listing: Listing): Observable <Listing> {
    return this.http.post<Listing>(`${this.listingApi}/create`, listing);
  }
  //UPDATE an organization listing
  updateListing(listingId: number, listing: any): Observable <Listing> {
    return this.http.put<Listing>(`${this.listingApi}/update/${listingId}`, listing);
  }
   //GET all the organization users and their listings for the site tally page
 getEverythingOrgs(): Observable <User[]> {
  return this.http.get<User[]>(`${this.listingApi}/findOrgs`);
 } 
}