import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { ListingService } from '../../shared/services/listing.service';
import { Listing } from '../../shared/models/listing.model';


@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit, OnDestroy {

  public listing: Listing;
  public isLoading = false;
  public isAuthenticated = false;
  public userIsAuthenticated = false;
  public isOrg = false;
  private authStatusSub: Subscription;

  constructor(
    private authorizationService: AuthorizationService,
    private listingService: ListingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.isOrg = this.authorizationService.getIsOrg();
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated
      });
      const listingId = +this.route.snapshot.paramMap.get('id');
      this.listingService.getUserListing(listingId).subscribe(listing => this.listing = listing)
      this.isLoading = false;
  }

  
 

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}