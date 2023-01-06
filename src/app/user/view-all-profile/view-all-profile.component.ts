import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-all-profile',
  templateUrl: './view-all-profile.component.html',
  styleUrls: ['./view-all-profile.component.css']
})
export class ViewAllProfileComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private authService: AuthService) { }

  dataSource = new _MatTableDataSource<any>();

  displayedColumns:string[] = [
    'id',
    'firstName',
     'lastName',
     'address',
     'civilStatus',
     'status'
    ];

  pageSize:number=10;
  pageIndex:number = 1;
  keyword='';
  totalNumber:any;
  totalPages:any;
  loadblock: boolean = false;

  ngOnInit(): void {
    this.getAllProfile();
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

  applyFilter(event:any) {
    console.log('its here')
    let filterValue = event.value;
    //this.data.filter = filterValue.trim().toLowerCase();
    this.keyword = filterValue.trim().toLowerCase();
    this.search();
}

  search() {
    this.userService.getSearch(this.authService.jwttoken, this.pageIndex, this.pageSize, this.keyword).subscribe(data=>{
      this.dataSource = data
    })
  }

  // applyFilter(event:any) {
      
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   this.keyword = filterValue.trim().toLowerCase();
  //   }

  createProfile(){
      this.router.navigate(['user/create-profile']);
    }

  getAllProfile(){
      // console.log('hey')
      this.userService.viewAllProfile(this.authService.jwttoken, this.pageIndex, this.pageSize, this.keyword).subscribe(
        data =>{
          console.log(data)
          if (data.result === 'failure') {
            data = undefined;
          }
          else if (data === 0){
            console.log('dito dapat')
            this.loadblock = true;
            data = undefined;
            this.totalNumber = 0;
          }
          else {
            console.log('dito dapat 2')
            this.totalNumber = data[0].total;
            this.totalPages = Math.ceil(this.totalNumber/this.pageSize);
            console.log('dito dapat 3')
            this.userService.viewAllProfile(this.authService.jwttoken, this.pageIndex, this.pageSize, this.keyword).subscribe(
              data => {
                console.log('dito dapat 4')
                if (data.result === 'failure') {
                  data = undefined
                }
                else {
                  // console.log(data)
                  this.dataSource = data;
                  // this.data.sort = this.sort;
                  console.log(this.dataSource)
                }
              },
              err => { 
                        data = undefined}
            );
              }
            },
          error => { 
                      // this.data = undefined 
                    }
      );
    }

    viewProfile(row:any){
      // console.log(row)
    //   if(row.agencyStatus == false){

    //   }else{
      localStorage.setItem('id',row.id);
      this.router.navigate(['user/view-profile']);
    // }
    }

}
