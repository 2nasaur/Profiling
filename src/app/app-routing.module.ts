import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { LoginPageComponent } from './auth/login-page/login-page.component';





const routes : Routes = [
  { path : '', redirectTo: '/login-page', pathMatch: 'full' },
  { path : 'login-page', component: LoginPageComponent }
  
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
