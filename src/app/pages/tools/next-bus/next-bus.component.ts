import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetLastUpdatedTime } from 'src/app/shared/helpers/get-date-time';

export interface BussArrival {
  RouteID: string;
  DirectionText: string;
  Minutes: number;

}

export interface WMATAResponseObject {
  StopName: string;
  Predictions: BussArrival[];
}

@Component({
  selector: 'app-next-bus',
  templateUrl: './next-bus.component.html',
  styleUrls: ['./next-bus.component.css']
})
export class NextBusComponent implements OnInit {
  message = 'yoohoo';
  stopID = 1000596;
  minutesUntilNextArrival = 0;
  arrivals: BussArrival[] = [];
  test: BussArrival;
  isLoading = true;
  errorMessage = 'Error fetching data from WMATA';
  showError = false;
  lastUpdated = '';
  stopName = '';
  imageA;
  imageB;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    try {
      this.http
        .get(`https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID=${this.stopID}&api_key=e13626d03d8e4c03ac07f95541b3091b`)
        .subscribe((res: WMATAResponseObject) => {
          console.log(res);
          this.stopName = res.StopName;
          this.arrivals = res.Predictions ?? [];
          this.minutesUntilNextArrival = this.arrivals.length ? this.arrivals[0].Minutes : 0xDEADBEEF;
          this.test = this.arrivals[0] ?? { RouteID: '69', DirectionText: 'South to VA', Minutes: 13 };
          // this.lastUpdated = new Date().toDateString();
          this.lastUpdated = GetLastUpdatedTime();
          this.isLoading = false;
        });
    } catch (error) {
      console.log(error);
      this.isLoading = false;
      this.showError = true;
    }




  }
}
