import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-price-markup',
  templateUrl: './price-markup.component.html',
  styleUrls: ['./price-markup.component.css']
})
export class PriceMarkupComponent implements OnInit {
@ViewChild('p', {static: true}) priceForm: NgForm;
finalPrice: string;

  ngOnInit(): void {
  }

  markup() {
    const markup = 1 + (this.priceForm.value.markup / 100);
    this.finalPrice = (this.priceForm.value.price * markup).toFixed(2);
    const hundredsPlaceIndex = this.finalPrice.length - 1;

    switch (this.finalPrice[hundredsPlaceIndex]) {
      case '0':
      case '6':
        this.finalPrice = (Number(this.finalPrice) - .01).toFixed(2);
        break;
      case '1':
        this.finalPrice = (Number(this.finalPrice) - .02).toFixed(2);
        break;
      case '2':
        this.finalPrice = (Number(this.finalPrice) + .03).toFixed(2);
        break;
      case '3':
      case '7':
        this.finalPrice = (Number(this.finalPrice) + .02).toFixed(2);
        break;
      case '4':
      case '8':
        this.finalPrice = (Number(this.finalPrice) + .01).toFixed(2);
        break;
    }

  }

}
