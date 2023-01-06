import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../user.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { Router } from '@angular/router';

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
  malnutrision:any;
  tuborcolosis:any;

  constructor(private userService: UserService, private router: Router, private authService: AuthService, private dialogRef: MatDialogRef<UpdateProfileComponent>) { }

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
        this.malnutrision = data.malnutrision
        this.userService.id = data.id
        this.tuborcolosis = data.tuborcolosis
        console.log(data.id)
      }
    });
  }

  update(value: any) {
    console.log(value);
    // this.disablebutton = true;
    // let dobformat = this.pipe.transform(this.user.birthday, 'yyyy-MM-dd'); //birthday format
    //delete form_value.birthday;
    // form_value.birthday = dobformat;
    console.log(this.userService.id)
    value.id = this.userService.id;

    this.userService.updateProfile(value, localStorage.getItem('token'), this.userService.id).subscribe((data) => { 
      if (data.result === 'failure') {
        alert('Something went wrong, please try again');
      } else {
        
        alert(data.message);
        this.router.navigate(['user/view-all-profile']);
        this.dialogRef.close();
      }
    });
  }

  cancel(){
    this.dialogRef.close();
  }

}
