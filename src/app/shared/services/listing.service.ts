import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../models/listing.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private listingApi: string = 'http://localhost:4000/listings';

  public users: User[];
  public listings: Listing[];

  constructor(
    private http: HttpClient,
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
  getUserListing(listingId: number): Observable<Listing> {
    return this.http.get<Listing>(`${this.listingApi}/listing/${listingId}`);
  }
  //CREATE an organization listing 
  createListing(listing: Listing): Observable<Listing> {
    return this.http.post<Listing>(`${this.listingApi}/create`, listing);
  }
  //UPDATE an organization listing
  updateListing(listingId: number, listing: any): Observable<Listing> {
    return this.http.put<Listing>(`${this.listingApi}/update/${listingId}`, listing);
  }
  //GET all the organization users and their listings for the site tally page
  getEverythingOrgs(): Observable<User[]> {
    return this.http.get<User[]>(`${this.listingApi}/findOrgs`);
  }
}