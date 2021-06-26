import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ZirZir} from '../types';
import {fakeListings} from '../fake-data';
import {ListingsService} from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  zerzir: ZirZir;
  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private listingService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.zerzir = fakeListings.find(zirzir => zirzir.id === id);
    this.listingService.getListingById(id).subscribe(value => {
      this.zerzir = value;
      this.isLoading = false;
    });

    this.listingService.addviewToListing(id).subscribe(() => console.log('Views updated!'));
  }
}
