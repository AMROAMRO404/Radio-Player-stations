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
  selectedCity: any;
  selected: number = 1;
  ngOnInit(): void {
    this.httpService.getCities().subscribe((data) => {
      this.countryObject = data;
      this.cities = this.countryObject.palestine;
    });
  }

  city: any;
  radiosCity(event: any) {
    for (let i = 0; i < this.cities.length; i++) {
      if (event.target.value == this.cities[i].cityName) {
        this.city = this.cities[i];
      }
    }
  }
}
