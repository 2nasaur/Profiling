import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { ViewSubProfileComponent } from '../view-sub-profile/view-sub-profile.component';

@Component({
  selector: 'app-update-sub-profile',
  templateUrl: './update-sub-profile.component.html',
  styleUrls: ['./update-sub-profile.component.css']
})
export class UpdateSubProfileComponent implements OnInit {

  firstName:any;
  lastName:any;
  address:any;
  contact:any;
  sex:any;
  civilStatus:any;
  soi:any;
  ea:any;
  typeofhousehold:any;
  pregnant:any;
  mh:any;
  malnutrision:any;
  tuborcolosis:any;
  remarks:any

  constructor(private userService: UserService, private router: Router, private authService: AuthService, private dialogRef: MatDialogRef<UpdateSubProfileComponent, ViewSubProfileComponent>, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile(){
    console.log(localStorage.getItem('id'))
    this.userService.viewProfile(this.authService.jwttoken, localStorage.getItem('id')).subscribe(data=>{
      // console.log(data)
      if(data.result == 'failure'){
        alert(data.message);
        // console.log('hey')
      }else{
        console.log(data.subProfiles)
        this.firstName = data.subProfiles[0].firstName;
        this.lastName = data.subProfiles[0].lastName;
        this.contact = data.subProfiles[0].contact;
        this.sex = data.subProfiles[0].sex;
        this.civilStatus = data.subProfiles[0].civilStatus;
        this.soi = data.subProfiles[0].soi;
        this.ea = data.subProfiles[0].ea;
        this.pregnant = data.subProfiles[0].pregnant;
        this.mh = data.subProfiles[0].mh;
        this.malnutrision = data.subProfiles[0].malnutrision
        this.tuborcolosis = data.subProfiles[0].tuborcolosis
        this.remarks = data.subProfiles[0].remarks

      }
    });
  }

  update(value: any) {

    this.userService.updateSecondaryProfile(value, localStorage.getItem('token'), localStorage.getItem('id')).subscribe((data) => { 
      if (data.result === 'failure') {
        alert('Something went wrong, please try again');
      } else {
        
        alert(data.message);
        // this.router.navigate(['user/view-all-profile']);
        this.dialogRef.close();
      }
    });

    let dialogRef = this.dialog.open(ViewSubProfileComponent, {
      width: '60%',
      minWidth: '250px',
      maxHeight: '500px'
      // data: { 
      //   // first_name: this.singleData.first_name, 
      //   // middle_name: this.singleData.middle_name,
      //   // last_name: this.singleData.last_name 
      // },
    });
  }

  cancel(){
    this.dialogRef.close();
  }

}
