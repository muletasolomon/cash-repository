import { Injectable } from '@angular/core';
import {ZirZir} from './types';
import {fakeListings} from './fake-data';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  // it just tell for our server the request body is json
  headers: new HttpHeaders(
    {
       'Content-Type': 'application/json',
    })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient,
  ) { }

  getListings(): Observable<ZirZir[]> {
    return this.http.get<ZirZir[]>('/api/listings');
  }

  getListingById(id: string): Observable<ZirZir> {
    return this.http.get<ZirZir>(`/api/listings/${id}`);
  }

  addviewToListing(id: string): Observable<ZirZir>  {
    return this.http.post<ZirZir> (
      `/api/listings/${id}/add-view`,
      {},
      httpOptions ,
    );
  }

  }
