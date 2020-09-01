import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../../shared/services/listing.service';
import { Listing } from '../../shared/models/listing.model';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit, OnDestroy {

  listing: Listing;

public listing: Listing = new Listing();
public isLoading = false;
public isAuthenticated = false;
public userIsAuthenticated = false;
public isOrg = false;
private authStatusSub: Subscription;
>>>>>> dev

  constructor(
    //private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService,
    private authorizationService: AuthorizationService
    
  ) { }

  ngOnInit() {
    this.isOrg = this.authorizationService.getIsAuth();
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusSub = this.authorizationService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated
    });
    this.isLoading = false;
  }
  
createListing() {
  this.isAuthenticated = true;
    this.listingService.createListing(this.listing);
}

ngOnDestroy() {
  this.authStatusSub.unsubscribe();
}
}