import {Component, Input, OnInit} from '@angular/core';
import {fakeMyListings} from '../fake-data';
import {ZirZir} from '../types';
import {Router} from '@angular/router';
import {ListingsService} from "../listings.service";

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {

  constructor(
    private router: Router,
    private listingService: ListingsService,
  ) { }


  ngOnInit() {
  }

  onSubmit(): void {
    // dynamically route to my listing page
    alert('Creating a new listing...');
    this.router.navigateByUrl('/my-listings');
    this.listingService.addviewToListing()

  }


}


