import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../../shared/services/listing.service';
import { Listing } from '../../shared/models/listing.model';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

@Component({
  selector: 'app-update-listing',
  templateUrl: './update-listing.component.html',
  styleUrls: ['./update-listing.component.css']
})
export class UpdateListingComponent implements OnInit {

public isLoading = false;
public isAuthenticated = false;
public listing: Listing;
private authListenerSub: Subscription

  constructor(
    private authorizationService: AuthorizationService,
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService
  ) { }

  ngOnInit(){ 
    this.isLoading = true;
    this.isAuthenticated = this.authorizationService.getIsAuth();
    this.authListenerSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated
      });
    const listingId = +this.route.snapshot.paramMap.get('id');
    this.listingService.getUserListing(listingId).subscribe(listing => this.listing = listing)
    this.isLoading = true;
  }
ngOnDestroy() {
  this.authListenerSub.unsubscribe();
}
}
