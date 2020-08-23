import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../../shared/services/listing.service';
import { Listing } from '../../shared/models/listing.model';

@Component({
  selector: 'app-update-listing',
  templateUrl: './update-listing.component.html',
  styleUrls: ['./update-listing.component.css']
})
export class UpdateListingComponent implements OnInit {

listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService
  ) { }

  ngOnInit(){ 
    const listingId = +this.route.snapshot.paramMap.get('id');
    this.listingService.getUserListing(listingId).subscribe(listing => this.listing = listing)
  }

}
