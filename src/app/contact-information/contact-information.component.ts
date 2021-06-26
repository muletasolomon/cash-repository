import { Component, OnInit } from '@angular/core';
import {ZirZir} from '../types';
import {ActivatedRoute, Router} from '@angular/router';
import {contactInformations, fakeListings} from '../fake-data';
import {Address} from '../Addres';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {

  email = '';
  message  = '';
  listingTwo: ZirZir;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void  {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingTwo = fakeListings.find(value => value.id === id);
    this.message = `Hi , I am interested in your ${this.listingTwo.name.toLowerCase()}!`;

  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

}
