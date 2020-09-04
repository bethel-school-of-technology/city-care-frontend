import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { AuthorizationService } from '../../shared/services/authorization.service'
import { Listing } from '../../shared/models/listing.model';
import { ListingService } from '../../shared/services/listing.service';
import { RequestService } from '../../shared/services/request.service';
import { Request } from '../../shared/models/request.model';
import { User } from '../../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-tally',
  templateUrl: './site-tally.component.html',
  styleUrls: ['./site-tally.component.css']
})
export class SiteTallyComponent implements OnInit, OnDestroy {
  

  // public responses: any = [];
  public user: User;
  public users: User[];
  public listings: Listing[] = [];
  public listing: Listing;
  public request: Request;
  public requests: Request[] = [];
  public isLoading = false;
  public isOrg = false;
  public userIsOrg = false;
  public isAuthenticated = false;
  public userIsAuthenticated = false;
  private authStatusSub: Subscription;
  private orgStatusSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private authorizationService: AuthorizationService,
    private listingService: ListingService,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    /*this.getAllUserListings();
    this.getAllUserRequests();
    this.getEverything(); */
    this.getAllOrgUsers();
    // this.getAllOtherUsers();
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated
    });
    this.isOrg = this.authorizationService.getIsOrg();
    this.orgStatusSub = this.authorizationService.getOrgStatusListener()
    .subscribe(isOrg => {
      this.userIsOrg = isOrg
    });
    this.isLoading = false;
  }

 /* getAllUserListings() {
   this.listingService.getAllUserListings().subscribe((listings: any) => {
    console.log(listings);
    this.listings = listings
  })
 } */
 /* getAllUserRequests() {
   this.requestService.getAllUserRequests().subscribe((requests: any) => {
     console.log(requests);
     this.requests = requests
   })
  //  const userId = +this.route.snapshot.paramMap.get('id');
  //  this.authorizationService.getUser(userId).subscribe(user => {
  //    console.log(user)
  //    this.user = user;
  //  })
 } */
/* getEverything() {
  this.listingService.getEverything().subscribe((responses: any ) => {
    console.log(responses);
    responses = responses.data
   })
} */

//get all users for the listings & requests
getAllOrgUsers() {
  this.authorizationService.getAllOrgUsers().subscribe(users => {
    console.log(users)
    this.users = users;
    const userId = +this.route.snapshot.paramMap.get('id');
    this.listingService.getUsersListing().subscribe((listings: any) => {
      this.listings = listings
    })
  })
}
/* getAllOtherUsers() {
  this.authorizationService.getAllOtherUsers().subscribe(users => {
    console.log(users)
    this.users = users;
    const userId = +this.route.snapshot.paramMap.get('id');
    this.requestService.getUsersRequests().subscribe((requests: any) => {
      this.requests = requests
    })
  })
} */
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
    this.orgStatusSub.unsubscribe();
  }

}
