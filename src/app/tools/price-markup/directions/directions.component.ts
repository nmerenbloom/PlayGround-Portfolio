import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {
  @ViewChild('f', {static: true}) theForm: NgForm;
  currentLat: number;
  currentLong: number;
  lat: number;
  lng: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  selectedType: string;
  c = 'c';
  a = 'a';

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(resp => {
      this.currentLat = resp.coords.latitude;
      this.currentLong = resp.coords.longitude;
    });
  }

  onSubmit() {
    this.lat = this.theForm.value.latInput;
    this.lng = this.theForm.value.longInput;
    this.street = this.theForm.value.street;
    this.city = this.theForm.value.city;
    this.state = this.theForm.value.state;
    this.zip = this.theForm.value.zip;
    console.log(this.selectedType);
    if (this.selectedType === 'c') { this.mapCoords(); } else { this.mapAddress(); }
  }

  mapAddress() {
    const dest = encodeURI(`${this.street},${this.city},${this.state},${this.zip}`);
    console.log(dest);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
    window.open(url);
  }

  mapCoords() {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${this.lat},${this.lng}`;
      window.open(url);
  }

}
