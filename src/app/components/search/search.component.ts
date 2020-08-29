import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';
import { Router } from '@angular/router';
import { Listing } from '../../shared/models/listing.model';
import { Request } from '../../shared/models/request.model';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  public isAuthenticated = false;
  public isLoading = false;
  public listings: string;
  public requests: string;
  public listing: Listing[] = [];
  public request: Request[] = [];
  private authListenerSub: Subscription; //listen for authentication

  /*   user: User[] = [
      {
        id: 0,
        first_name: 'Edward',
        last_name: 'Kremer',
        org_name: ' ',
        contact_name: 'Thomas',
        username: 'tbone7243',
        password: 'tom',
        email: 'tbone7243@nc.rr.com',
        phone: 9197487412,
        mobile_phone: 9194787412,
        fax: 111111111,
        contact_method: 'phone',
        address1: '2403 June Dr.',
        address2: '2403 June Dr.',
        city: 'Hillsborough',
        state: 'North Carolina',
        county: 'Orange',
        zip: 27278
      }
    ] */

  // users: string;

  listingData = [];
  requestData = [];

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
    private searchService: SearchService
  ) { }
  ngOnInit() {
    this.isLoading = false;
    this.isAuthenticated = this.authorizationService.getIsAuth();
    this.authListenerSub = this.authorizationService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated
      });
    this.searchService.getListings().subscribe(listingData => {
      console.log(listingData)
    });
    this.searchService.getRequests().subscribe(requestData => {
      console.log(requestData);
    });
    this.isLoading = true;
  }
  getRequests() {
    this.searchService.getRequests().subscribe((requestData: any) => {
      console.log(requestData);
      this.requestData = requestData;
    })
  }
  getListings() {
    this.searchService.getListings().subscribe((listingData: any) => {
      console.log(listingData);
      this.listingData = listingData;
    })
  }
 ngOnDestroy() {
   this.authListenerSub.unsubscribe();
 }
}