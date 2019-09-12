import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FooterComponent } from '../layouts/footer/footer.component';
import { NavigationComponent } from '../layouts/navigation/navigation.component';
import { PagesComponent } from './pages.component';
import { SpreadWisdomMainComponent } from './spread-wisdom-main/spread-wisdom-main.component';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    SpreadWisdomMainComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
