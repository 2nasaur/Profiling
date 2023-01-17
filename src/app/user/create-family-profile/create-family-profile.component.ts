import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { UserService } from '../user.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-create-family-profile',
  templateUrl: './create-family-profile.component.html',
  styleUrls: ['./create-family-profile.component.css']
})
export class CreateFamilyProfileComponent implements OnInit {

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
  typeOfRelationship:any;

  constructor(private dialogRef: MatDialogRef<CreateFamilyProfileComponent>, private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(value: any){

    // value.id = localStorage.getItem('id');
    // value.agencyStatus = this.agencyStatus;
    // value.radius = this.radius;
    this.userService.addSecondaryProfile(value,this.authService.jwttoken, localStorage.getItem('id')).subscribe(data=>{
      if(data.result == 'failure'){
        alert(data.message);
      }else{
        alert(data.message);
        this.dialogRef.close();
        console.log('done')
        // this.router.navigate(['user/view-all-profile']);
      }
    });

  }

  cancel(){
    this.dialogRef.close();
  }

}
