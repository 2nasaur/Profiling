import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../user.service';
import {MatDialog} from '@angular/material/dialog'
import { CreateFamilyProfileComponent } from '../create-family-profile/create-family-profile.component';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  firstName:any;
  lastName:any;
  address:any;
  contact:any;
  sex:any;
  civilStatus:any;
  soi:any;
  ea:any;
  typeofhousehold:any;
  pregnancy:any;
  mh:any;
  malnutrision:any;
  tuborcolosis:any;


  constructor(private userService: UserService, private authService: AuthService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  submit(value: any){

    // value.agencyID = localStorage.getItem('agencyID');
    // value.agencyStatus = this.agencyStatus;
    // value.radius = this.radius;
    this.userService.addProfile(value,this.authService.jwttoken).subscribe(data=>{
      if(data.result == 'failure'){
        alert(data.message);
      }else{
        alert(data.message);
        console.log('done')
        this.router.navigate(['user/view-all-profile']);
      }
    });

  }

  cancel(){
    this.router.navigate(['user/view-all-profile']);
  }

  addfamily(){
    let dialogRef = this.dialog.open(CreateFamilyProfileComponent, {
      width: '40%',
      minWidth: '320px',
      // data: { 
      //   // first_name: this.singleData.first_name, 
      //   // middle_name: this.singleData.middle_name,
      //   // last_name: this.singleData.last_name 
      // },
    });
  }

}
