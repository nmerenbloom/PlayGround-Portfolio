import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectionsComponent } from './pages/tools/directions/directions.component';
import { PriceMarkupComponent } from './pages/tools/price-markup/price-markup.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { GuestBookComponent } from './pages/guest-book/guest-book.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { NextBusComponent } from './pages/tools/next-bus/next-bus.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'directions', component: DirectionsComponent},
  {path: 'price-markup', component: PriceMarkupComponent},
  {path: 'contact-info', component: ContactInfoComponent},
  {path: 'guest-book', component: GuestBookComponent},
  {path: 'next-bus', component: NextBusComponent},
  {path: 'auth', component: AuthenticateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
