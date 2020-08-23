import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectionsComponent } from './tools/price-markup/directions/directions.component';
import { PriceMarkupComponent } from './tools/price-markup/price-markup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { GuestBookComponent } from './guest-book/guest-book.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'directions', component: DirectionsComponent},
  {path: 'price-markup', component: PriceMarkupComponent},
  {path: 'contact-info', component: ContactInfoComponent},
  {path: 'guest-book', component: GuestBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
