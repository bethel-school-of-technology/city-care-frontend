import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { ListingService } from '../../shared/services/listing.service';
import { Listing } from '../../shared/models/listing.model';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit, OnDestroy {

  public user: User;
  public listing: Listing;
  public isLoading = false;
  public isAuthenticated = false;
  public userIsAuthenticated = false;
  public isOrg = false;
  public userIsOrg = false;
  
  private authStatusSub: Subscription;
  private orgStatusSub: Subscription;

  constructor(
    private authorizationService: AuthorizationService,
    private listingService: ListingService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getListing();
    this.getUser();
    this.isLoading = true;
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated
      });
    this.isOrg = this.authorizationService.getIsOrg();
    this.orgStatusSub = this.authorizationService.getOrgStatusListener().subscribe(isOrg => {
      this.userIsOrg = isOrg;
    });
    this.isLoading = false;
  }
getListing() {
  const listingId = +this.route.snapshot.paramMap.get('id');
  this.listingService.getUserListing(listingId).subscribe(listing => {
    console.log(listing)
    this.listing = listing
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getThisOrgUser(id).subscribe(user => {
      this.user = user;
      console.log(user)
    })   
  });
}
getUser() {
 
}

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
    this.orgStatusSub.unsubscribe();
  }
}
