import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Radio-Staions-Player';
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get(this.url).subscribe(data => {
      this.radioObject = JSON.parse(JSON.stringify(data));
      this.cities = this.radioObject.palestine
      console.log(this.radioObject.palestine)
    })
  }
  url = environment.url;

  cities: []
  radioObject: any = ''
  city: String;
  showTheRadioes(value: String) {
    this.city = value
  }


}
