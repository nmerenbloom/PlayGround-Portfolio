import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DirectionsComponent } from './tools/price-markup/directions/directions.component';
import { PriceMarkupComponent } from './tools/price-markup/price-markup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectionsComponent,
    PriceMarkupComponent,
    LandingPageComponent,
    ContactInfoComponent,
    ModalBasicComponent,
    GuestBookComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'CHAVES_GOOGLE_MAPS'
    }),
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
