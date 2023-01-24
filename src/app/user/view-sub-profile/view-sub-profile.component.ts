import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { UserService } from '../user.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UpdateSubProfileComponent } from '../update-sub-profile/update-sub-profile.component';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-sub-profile',
  templateUrl: './view-sub-profile.component.html',
  styleUrls: ['./view-sub-profile.component.css']
})
export class ViewSubProfileComponent implements OnInit {

  dataSource = new _MatTableDataSource<any>();

  displayedColumns:string[] = [
    'firstName',
     'lastName',
     'civilStatus',
     'malnutrision',
     'tuborcolosis',
    ];

  pageSize:number=10;
  pageIndex:number = 1;
  keyword='';
  totalNumber:any;
  totalPages:any;
  loadblock: boolean = false;

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

  onPaginateChange(event:any){
    localStorage.setItem('pageSize',event.pageSize);

    this.pageIndex = event.pageIndex + 1;
    localStorage.setItem('pageIndex',this.pageIndex.toString());
  
    this.pageSize = event.pageSize;
    if (this.keyword === undefined){
      //this.getAllAgencies();
  }else{
      // this.search(this.search);
  }
  }


  getProfile(){
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
          this.dataSource = data.subProfiles
        }
      }
    });
  }



  viewProfile(row:any){
    console.log(row)
    if(row.agencyStatus == false){

    }else{
    localStorage.setItem('myArray', JSON.stringify(row));
    localStorage.setItem('id2',row.id);
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






  // getProfile(){
  //   console.log(localStorage.getItem('id'))
  //   this.userService.viewProfile(this.authService.jwttoken, localStorage.getItem('id')).subscribe(data=>{
  //     console.log(data)
  //     console.log(data.subProfiles[0].firstName)
  //     if(data.result == 'failure'){
  //       alert(data.message);
  //       // console.log('hey')
  //     }else{
  //       // console.log(data.firstName)
  //       // this.firstName = data.subProfiles[0].firstName;
  //       // this.lastName = data.subProfiles[0].lastName;
  //       for (let multiple of data.subProfiles){
  //         this.multiples.push(multiple)
  //         console.log(this.multiples)
  //       }
  //     }
  //   });
  // }

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
  }
}
