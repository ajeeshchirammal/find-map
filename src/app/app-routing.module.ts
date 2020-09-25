import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// components
import { LandingComponent } from './map/landing/landing.component';


const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'landing'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
