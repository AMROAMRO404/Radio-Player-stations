import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  url = "http://www.json-generator.com/api/json/get/bIpVztBRyW?indent=2";
  cities: []
  radioObject: any = ''


}
