import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Radio-Staions-Player';
  constructor(private httpService: HttpService) {}
  cities: any;
  countryObject: any;

  ngOnInit(): void {
    this.httpService.getCities().subscribe((data) => {
      this.countryObject = data;
      this.cities = this.countryObject.palestine;
    });
  }

  city: String;
  radiosCity(value: String) {
    this.city = value;
  }
}
