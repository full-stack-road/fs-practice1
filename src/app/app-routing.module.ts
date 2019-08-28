import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpreadWisdomMainComponent } from './spread-wisdom-main/spread-wisdom-main.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  { path: '', component: SpreadWisdomMainComponent },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
