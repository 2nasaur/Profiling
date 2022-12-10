import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../user.service';
import {MatDialog} from '@angular/material/dialog'
import { CreateFamilyProfileComponent } from '../create-family-profile/create-family-profile.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

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

  constructor(private userService: UserService, private authService: AuthService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    console.log(localStorage.getItem('id'))
    this.userService.viewProfile(this.authService.jwttoken, localStorage.getItem('id')).subscribe(data=>{
      // console.log(data)
      if(data.result == 'failure'){
        alert(data.message);
        // console.log('hey')
      }else{
        // console.log(data.firstName)
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.address = data.address;
        this.contact = data.contact;
        this.sex = data.sex;
        this.civilStatus = data.civilStatus;
        this.soi = data.soi;
        this.ea = data.ea;
        this.typeofhousehold = data.typeofhousehold;
        this.pregnancy = data.pregnancy;
        this.mh = data.mh;
      }
    });
  }

  addfamily(){
    let dialogRef = this.dialog.open(CreateFamilyProfileComponent, {
      width: '60%',
      minWidth: '320px',
      // data: { 
      //   // first_name: this.singleData.first_name, 
      //   // middle_name: this.singleData.middle_name,
      //   // last_name: this.singleData.last_name 
      // },
    });
  }

  update(){
    let dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '40%',
      minWidth: '320px',
      // data: { 
      //   // first_name: this.singleData.first_name, 
      //   // middle_name: this.singleData.middle_name,
      //   // last_name: this.singleData.last_name 
      // },
    });
  }

  cancel(){
    this.router.navigate(['user/view-all-profile']);
  }

}
