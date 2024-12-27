import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DirectionsComponent } from './pages/tools/directions/directions.component';
import { PriceMarkupComponent } from './pages/tools/price-markup/price-markup.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalBasicComponent } from './shared/components/modal-basic/modal-basic.component';
import { GuestBookComponent } from './pages/guest-book/guest-book.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { WavyContainerComponent } from './shared/components/wavy-container/wavy-container.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NextBusComponent } from './pages/tools/next-bus/next-bus.component';

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
    WavyContainerComponent,
    AuthenticateComponent,
    NextBusComponent,
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
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
