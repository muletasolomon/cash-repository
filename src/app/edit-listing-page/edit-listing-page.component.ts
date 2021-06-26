import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ZirZir} from "../types";
import {fakeListings, fakeMyListings} from "../fake-data";

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {

  listing: ZirZir;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find(value => value.id === id);
  }

  onSubmit(): void {
    alert('Saving changes to the listing....');
    this.router.navigateByUrl('/my-listings');
  }

}
