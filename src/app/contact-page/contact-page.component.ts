import { Component, OnInit } from '@angular/core';
import { ZirZir} from '../types';
import {Address} from '../Addres';
import {ActivatedRoute, ɵangular_packages_router_router_a} from '@angular/router';
import {contactInformations, fakeListings} from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  address: Address;
  constructor(
    private route: ActivatedRoute,
) {}

  ngOnInit(): void {
    const fks = this.route.snapshot.paramMap.get('id');
    this.address = contactInformations.find(address => address.id === fks);
  }
}
