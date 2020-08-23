import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { RequestService } from '../../shared/services/request.service';
import { ListingService } from '../../shared/services/listing.service'; 
import { User } from '../../shared/models/user.model';
import { Request } from '../../shared/models/request.model';
import { Listing } from '../../shared/models/listing.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  requests: Request[] = [];
  listings: Listing[] = [];
  listing: Listing;
  rquest: Request;
  userIsIndividual = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorizationService: AuthorizationService,
    private requestService: RequestService,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getUserListings();
    this.getUserRequests(); 
  }
getProfile() {
  const userId = +this.route.snapshot.paramMap.get('user_id');
  this.authorizationService.getProfile(userId).subscribe(user => this.user = user);
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
  window.location.reload();
}
onClickDeleteListing(listing: Listing) {
  this.listings = this.listings.filter(listing => listing.id !== listing.id);
  this.listingService.deleteListing(listing.id).subscribe();
  window.location.reload()
}
}
