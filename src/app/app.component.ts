import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsiveService } from './shared/services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isMobile$: Observable<boolean>;

  constructor(private responsiveService: ResponsiveService) {
    this.isMobile$ = this.responsiveService.isMobile$;
  }
}
