import { Component, OnInit } from '@angular/core';
import {ZirZir} from '../types';
import {fakeListings, fakeMyListings} from '../fake-data';

@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent implements OnInit {

  listing: ZirZir[] = [];
  listVal: ZirZir;

  constructor() { }

  ngOnInit() {
    this.listing = fakeMyListings;
  }

  onDelete(listingid: string): void {
    alert(`Deleting your listing with id ${listingid}`);
  }


  onDeleteClicked(listingId: string): void  {
    alert(`Deleting your listing with id ${listingId}`) ;
  }


}
