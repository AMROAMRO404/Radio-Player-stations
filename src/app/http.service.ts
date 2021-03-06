import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  url = environment.url;
  countryObject: any;
  cities: any;

  getCities() {
    return this.http.get(this.url);
  }
}
