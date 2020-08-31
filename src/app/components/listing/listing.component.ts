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
public isLoading = false;
public isAuthenticated = false;
public isOrg = false;
public listing: Listing;
private authStatusListenerSub: Subscription;

  constructor(
    //private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService,
    private authorizationService: AuthorizationService
    
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.isOrg = this.authorizationService.getIsAuth();
    this.isAuthenticated = this.authorizationService.getIsAuth();
    this.authStatusListenerSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated
      });
      this.isLoading = false;
  }
  
createListing() {

}

ngOnDestroy() {
  this.authStatusListenerSub.unsubscribe();
}
}
//test jared branch