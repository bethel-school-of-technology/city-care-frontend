import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../shared/services/authorization.service'
import { ListingService } from '../../shared/services/listing.service';
import { RequestService } from '../../shared/services/request.service';
import { Listing } from '../../shared/models/listing.model';
import { Request } from '../../shared/models/request.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-site-tally',
  templateUrl: './site-tally.component.html',
  styleUrls: ['./site-tally.component.css']
})
export class SiteTallyComponent implements OnInit, OnDestroy {

  public listings: Listing[];
  public requests: Request[];
  public isLoading = false;
  public isOrg = false;
  public isAuthenticated = false;
  public userIsAuthenticated = false;
  private authStatusSub: Subscription;

  constructor(
    private authorizationService: AuthorizationService,
    private listingService: ListingService,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    //this.getUserRequests();
    //this.getUserListings();
    this.getUserReqeuestsByCounty();
    this.getUserListingsByCounty();
    this.isOrg = this.authorizationService.getIsAuth();
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated
    });
    this.isLoading = false;
  }
  // getUserListings() {
  //   this.listingService.getUserListings().subscribe((listings: any) => {
  //     console.log(listings);
  //     this.listings = listings;
  //   });
  // }
  getUserListingsByCounty() {
    this.listingService.getUserListingsByCounty().subscribe((listings: any) => {
      console.log(listings);
      this.listings = listings;
    })
  }
 /*  getUserRequests() {
    this.requestService.getUserRequests().subscribe((requests: any) => {
      console.log(requests);
      this.requests = requests;
    })
  } */
  getUserReqeuestsByCounty() {
    this.requestService.getUserRequestsByCounty().subscribe((requests: any) => {
      console.log(requests);
      this.requests = requests;
    })
  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

}
