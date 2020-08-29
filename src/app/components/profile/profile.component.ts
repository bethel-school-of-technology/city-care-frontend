import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { RequestService } from '../../shared/services/request.service';
import { ListingService } from '../../shared/services/listing.service'; 
import { User } from '../../shared/models/user.model';
import { Request } from '../../shared/models/request.model';
import { Listing } from '../../shared/models/listing.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public user: User; //define the user
  public requests: Request[] = []; //Set the requests to an empty array 
  public listings: Listing[] = [];//Set the listings to an empty array
  public listing: Listing;//Declare listing
  public request: Request;//Declare request
  public isOrg = false; //Determine the user status, organization or individual
  public isAdmin = false; //Stretch goal 
  public isLoading = false; //Determine if the page is still loading and set the value
  public isAuthenticated = false;
  public userId: string;
  private authStatusSub: Subscription;

  constructor(
    private route: ActivatedRoute, //Set the route as the Activated Route
    private authorizationService: AuthorizationService, //Declare and bring in the authorization service for use in the component
    private requestService: RequestService, //Declare and bring in the request service for use in the component
    private listingService: ListingService//Declare and bring in the listing service for use in the component
  
  
    ) { }

  ngOnInit() {
    this.isLoading = true;
    this.getProfile();//Get the profile 
    this.getUserListings();//Get the listings
    this.getUserRequests(); //Get the requests
    this.isLoading = false;
    this.isOrg = this.authorizationService.getIsAuth();
    this.isAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated
    });
    this.isLoading = false;
  }

getProfile() {
  const userId = +this.route.snapshot.paramMap.get('user_id');
  this.authorizationService.getProfile(userId).subscribe(user => {
    this.user = user//,
    //this.isOrg = user.isOrg;
  });
}

getUserListings() {
  this.listingService.getUserListings().subscribe((listings: any) => {
    console.log(listings);
    this.listings = listings;
  });
}

getUserRequests() {
  this.requestService.getUserRequests().subscribe((requests: any) => {
    console.log(requests);
    this.requests = requests;
  })
}

onClickDeleteRequest(request: Request) {
  this.requests = this.requests.filter(request => request.id !== request.id);
  this.requestService.deleteRequest(request.id).subscribe();
}

onClickDeleteListing(listing: Listing) {
  this.listings = this.listings.filter(listing => listing.id !== listing.id);
  this.listingService.deleteListing(listing.id).subscribe();
}
ngOnDestroy() {
  this.authStatusSub.unsubscribe();
}
}
