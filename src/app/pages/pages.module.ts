//angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { PagesRoutingModule } from './pages-routing.module';
import { FooterComponent } from '../layouts/footer/footer.component';
import { NavigationComponent } from '../layouts/navigation/navigation.component';
import { PagesComponent } from './pages.component';
import { SpreadWisdomMainComponent } from './spread-wisdom-main/spread-wisdom-main.component';

//ngx-admin module
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RatingModule } from 'ngx-bootstrap/rating';
//ngx-spinner module
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    SpreadWisdomMainComponent,
    PagesComponent,
  ],
  imports: [
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    NgxSpinnerModule,
  ]
})
export class PagesModule {
}
