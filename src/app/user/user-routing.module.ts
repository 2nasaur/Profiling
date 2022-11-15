import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';
import { ViewAllProfileComponent } from './view-all-profile/view-all-profile.component';
import { ReportComponent } from './report/report.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';



const routes : Routes = [
  { path : 'user', component:UserComponent,  children: [
    { path : 'dashboard', component: DashboardComponent },
    { path : 'create-profile', component: CreateProfileComponent},
    { path : 'view-all-profile', component: ViewAllProfileComponent},
    { path : 'view-profile', component: ViewProfileComponent},
    { path : 'report', component: ReportComponent}
    

    ]},
    { path :  '**', redirectTo: '/user/dashboard' , pathMatch:'full'}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserRoutingModule { }