import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingsPageComponent} from './listings-page/listings-page.component';
import {ListingDetailPageComponent} from './listing-detail-page/listing-detail-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {EditListingPageComponent} from './edit-listing-page/edit-listing-page.component';
import {MyListingPageComponent} from './my-listing-page/my-listing-page.component';
import {NewListingPageComponent} from './new-listing-page/new-listing-page.component';
import {ContactInformationComponent} from './contact-information/contact-information.component';


const routes: Routes = [
  {path: '', redirectTo: 'listings', pathMatch: 'full'},
  {path:  'listings', component: ListingsPageComponent, pathMatch: 'full'},
  {path:  'listings/:id', component: ListingDetailPageComponent} ,
  {path:  'contact/:id',  component:  ContactPageComponent},
  {path:  'contactInfo/:id',  component: ContactInformationComponent},
  {path:  'edit-listing/:id', component: EditListingPageComponent},
  {path:  'my-listings',  component:  MyListingPageComponent},
  {path:  'new-listing',  component:  NewListingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
