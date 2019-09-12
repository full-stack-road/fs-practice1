import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpreadWisdomMainComponent } from './spread-wisdom-main/spread-wisdom-main.component';
import { PagesComponent } from './pages.component';


const pagesRoutes: Routes = [
  {
    path: 'spreadwisdom',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: SpreadWisdomMainComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
