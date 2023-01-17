import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/auth/auth.service';
import * as XLSX from 'xlsx';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';
import { last } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:[DatePipe]
  // providers:[DatePipe,NgxPrintModule]
})
export class ReportComponent implements OnInit {
  pipe = new DatePipe('en-US');

  divVisible:boolean=true;
  pageIndex: number = 1;
  pageSize: number = 10;
  firstName = '';
  lastName = '';
  sex= '';
  // male:boolean=false;
  // female:boolean=false;

  dobformat:any
  dobformat2:any

  startDate:any
  endDate:any
  today = new Date(); 
  renderedData: any

  // fileName= 'generateReport.xlsx';

  dataSource = new _MatTableDataSource<any>();

  displayedColumns:string[] = [
    // 'id',
    'firstName',
     'lastName',
     'address',
     'civilStatus',
     'pregnant',
     'tuborcolosis',
     'malnutrision',
     'status',
     'remarks'
    ];

    fileName= 'ExcelSheet.xlsx';
    userList = [

      {
      
      "id": 1,
      
      "name": "Leanne Graham",
      
      "username": "Bret",
      
      "email": "Sincere@april.biz"
      
      },
      
      {
      
      "id": 2,
      
      "name": "Ervin Howell",
      
      "username": "Antonette",
      
      "email": "Shanna@melissa.tv"
      
      },
      
      {
      
      "id": 3,
      
      "name": "Clementine Bauch",
      
      "username": "Samantha",
      
      "email": "Nathan@yesenia.net"
      
      },
      
      {
      
      "id": 4,
      
      "name": "Patricia Lebsack",
      
      "username": "Karianne",
      
      "email": "Julianne.OConner@kory.org"
      
      },
      
      {
      
      "id": 5,
      
      "name": "Chelsey Dietrich",
      
      "username": "Kamren",
      
      "email": "Lucio_Hettinger@annie.ca"
      
      }
      
      ]

  constructor( private userService: UserService, private authService: AuthService, private datePipe: DatePipe) {
   }

  ngOnInit(): void {
    this.toggleFilter()
    this.toggleFilter()
  }

  toggleFilter(){
    this.divVisible = !this.divVisible;
    // let dobformat = this.pipe.transform(this.startDate, 'MM-dd-yyyy');
    // let dobformat2 = this.pipe.transform(this.endDate, 'MM-dd-yyyy');
    // this.startDate = dobformat
    // this.tmp_start_date = startDate
    // this.startDate = dobformat
    // console.log(this.dobformat, this.dobformat2);
    // let dobformat = this.pipe.transform(this.startDate, 'yyyy-MM-dd');
    // let dobformat = this.pipe.transform(this.endDate, 'yyyy-MM-dd');
  }

  clearFilter(){
    this.firstName = '',
    this.lastName = '',
    this.sex = '',
    console.log(this.sex)
    // this.male=false;
    // this.female=false;
  }

  exportExcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }


  submit(value: any){
    // console.log(this.startDate, this.endDate)
    let dobformat = this.pipe.transform(this.startDate, 'yyyy-MM-dd');
    let dobformat2 = this.pipe.transform(this.endDate, 'yyyy-MM-dd');
    value.startDate = dobformat
    value.endDate = dobformat2
    console.log(this.firstName, this.lastName);

        this.userService.viewReports(this.authService.jwttoken, value.startDate, value.endDate, this.pageIndex, this.pageSize, this.firstName, this.lastName, this.sex)
        .subscribe(
        data=>{
          // let dobformat = this.pipe.transform(value.birthday, 'yyyy-MM-dd');
          // value.startDate = dobformat;
          // value.endDate = dobformat;
          // console.log(this.startDate, this.endDate)
          console.log(data)
          this.dataSource = data
        }
)
            // console.log(data);
            // console.log("Working");

  }

  

}
