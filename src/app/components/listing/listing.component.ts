import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../../shared/services/listing.service';
import { Listing } from '../../shared/models/listing.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

public listing:Listing = new Listing();

  constructor(
    //private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.getUserListing();
  }

  getUserListing() {
    //let listingId = +this.route.snapshot.paramMap.get('id');
    this.listingService.getUserListing(this.listing).subscribe(result => {
      console.log(result);
      this.router.navigate(['/city-care/listing']);
    })
  }

}
//test jared branch