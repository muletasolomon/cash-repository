import { Component, OnInit } from '@angular/core';
import {ZirZir} from '../types';
import {fakeListings} from '../fake-data';
import {ListingsService} from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {

  value: ZirZir[] = [];

  constructor(private listingsService: ListingsService,
  ) { }

  ngOnInit() {
    this.listingsService.getListings().subscribe(zirzirs => this.value = zirzirs);
  }
}

