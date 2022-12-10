import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  divVisible:boolean=true;
  firstName:any;
  lastName:any;

  dataSource = new _MatTableDataSource<any>();

  displayedColumns:string[] = [
    // 'id',
    'firstName',
     'lastName',
     'address',
     'civilStatus',
     'status'
    ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(){
    this.divVisible = !this.divVisible;
  }

}
