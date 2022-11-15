import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Modules

import { UserRoutingModule } from './user-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenu, MatMenuModule, MAT_MENU_PANEL} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthModule } from '../auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';







// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { ViewAllProfileComponent } from './view-all-profile/view-all-profile.component';
import { ReportComponent } from './report/report.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { CreateFamilyProfileComponent } from './create-family-profile/create-family-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';






@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    FooterComponent,
    SidenavComponent,
    HeaderComponent,
    ViewAllProfileComponent,
    ReportComponent,
    CreateProfileComponent,
    CreateFamilyProfileComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
  




  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatTreeModule,
    MatRippleModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
    
    
    
  
    
    
  ]
})
export class UserModule { }
