import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { UserService } from '../user.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UpdateSubProfileComponent } from '../update-sub-profile/update-sub-profile.component';

@Component({
  selector: 'app-view-sub-profile',
  templateUrl: './view-sub-profile.component.html',
  styleUrls: ['./view-sub-profile.component.css']
})
export class ViewSubProfileComponent implements OnInit {

  firstName:any;
  lastName:any;
  civilStatus:any;
  pregnant:any;
  tuborcolosis:any;
  malnutrision:any;

  multiples: any[];

  constructor(private dialogRef: MatDialogRef<ViewSubProfileComponent, UpdateSubProfileComponent>, private userService: UserService, private authService: AuthService, private router: Router, public dialog: MatDialog) { 
    { this.multiples = [] }
  }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    console.log(localStorage.getItem('id'))
    this.userService.viewProfile(this.authService.jwttoken, localStorage.getItem('id')).subscribe(data=>{
      console.log(data)
      console.log(data.subProfiles[0].firstName)
      if(data.result == 'failure'){
        alert(data.message);
        // console.log('hey')
      }else{
        // console.log(data.firstName)
        // this.firstName = data.subProfiles[0].firstName;
        // this.lastName = data.subProfiles[0].lastName;
        for (let multiple of data.subProfiles){
          this.multiples.push(multiple)
          console.log(this.multiples)
        }
      }
    });
  }

  cancel(){
    this.dialogRef.close();
  }

  editSub(){
    let dialogRef = this.dialog.open(UpdateSubProfileComponent, {
      width: '40%',
      minWidth: '320px',
      maxHeight: '500px'
      // data: { 
      //   // first_name: this.singleData.first_name, 
      //   // middle_name: this.singleData.middle_name,
      //   // last_name: this.singleData.last_name 
      // },
    });
    this.dialogRef.close();
  }
}
