import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../user.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

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

  constructor(private userService: UserService, private authService: AuthService, private dialogRef: MatDialogRef<UpdateProfileComponent>) { }

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

  cancel(){
    this.dialogRef.close();
  }

}
