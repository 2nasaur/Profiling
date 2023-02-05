import { Component, OnInit } from '@angular/core';
import { MatMultiYearView } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  total:any
  qualified:any
  malnutrision:any
  pregnant:any
  tuborcolosis:any

  yearToday = new Date().getFullYear();

  fileName= 'graph.xlsx';


  divlinechart:any

  divbarchart:any
  divbarchart2:any
  divbarchart3:any
  divbarchart4:any
  divbarchart5:any
  divbarchart6:any


  lineChartData = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [],
        label: 'Numbers of Owner Residents Registered for the year of ' + this.yearToday,
        fill: true,
      }
    ]
  }

  pieChartData = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [0, 0, 0, 0, 89, 34, 43, 54, 28, 74, 93, 54],
        labels: 'Sales Percent',
        fill: true,
        // backgroundColor: 'rgba(255, 255, 0, 0.3',
        // borderColor: 'black'
      }
    ]
  }

  pieChartOption ={
    responsive: false
  }

  // barChartData1 = {
  //   labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
  //   datasets:[
  //     {
  //       // data: [0, 0, 0, 0, 89, 34, 43, 54, 28, 74, 93, 54],
  //       data: [],
  //       label: 'Number of Mens',
  //       fill: true,
  //       // backgroundColor: 'rgba(255, 255, 0, 0.3',
  //       // borderColor: 'black'
  //     }
  //   ]
  // }

  barChartData = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [],
        label: 'Number of Mens for the year of ' + this.yearToday,
        fill: true,
        // backgroundColor: 'rgba(255, 255, 0, 0.3',
        // borderColor: 'black'
      }
    ]
  }

  barChartData2 = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [],
        label: 'Number of Womans for the year of ' + this.yearToday,
        fill: true,
        // backgroundColor: 'rgba(255, 255, 0, 0.3',
        // borderColor: 'black'
      }
    ]
  }

  barChartData3 = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [],
        label: 'Number of Qualified for 4ps for the year of ' + this.yearToday,
        fill: true,
        // backgroundColor: 'rgba(255, 255, 0, 0.3',
        // borderColor: 'black'
      }
    ]
  }

  barChartData4 = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [],
        label: 'Number of Pregnant for the year of ' + this.yearToday,
        fill: true,
        // backgroundColor: 'rgba(255, 255, 0, 0.3',
        // borderColor: 'black'
      }
    ]
  }

  barChartData5 = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [],
        label: 'Tuborcolosis Cases for the year of ' + this.yearToday,
        fill: true,
        // backgroundColor: 'rgba(255, 255, 0, 0.3',
        // borderColor: 'black'
      }
    ]
  }

  barChartData6 = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [],
        label: 'Malnutrision Cases for the year of ' + this.yearToday,
        fill: true,
        // backgroundColor: 'rgba(255, 255, 0, 0.3',
        // borderColor: 'black'
      }
    ]
  }

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.getGraph();
    this.getDashboard();
    console.log(this.divlinechart)
  }

  getGraph(){
    // console.log(localStorage.getItem('id'))
    // console.log('hey')
    this.userService.getDashboard(this.authService.jwttoken).subscribe(data=>{
      // console.log(this.barChartData2.datasets[0].data)
      // console.log(data.MaleYr)
      console.log(data)
      this.lineChartData.datasets[0].data = data.FamilyYr
      this.divlinechart = data.FamilyYr

      this.barChartData.datasets[0].data = data.MaleYr
      this.divbarchart = data.MaleYr

      this.barChartData2.datasets[0].data = data.FemaleYr
      this.divbarchart2 = data.FemaleYr

      this.barChartData3.datasets[0].data = data.QualifiedYr
      this.divbarchart3 = data.QualifiedYr

      this.barChartData4.datasets[0].data = data.PregnantYr
      this.divbarchart4 = data.PregnantYr

      this.barChartData5.datasets[0].data = data.tbyr
      this.divbarchart5 = data.tbyr
      console.log(data.tbyr)

      this.barChartData6.datasets[0].data = data.MalnutrisionYr
      this.divbarchart6 = data.MalnutrisionYr

      console.log(this.divlinechart)
      // console.log(this.barChartData2.datasets[0].data)
      // console.log(this.barChartData2)
      // console.log(this.barChartData2.datasets[0].data)
    });
  }

  getDashboard(){
    // console.log(localStorage.getItem('id'))
    // console.log('hey')
    this.userService.getDashboard(this.authService.jwttoken).subscribe(data=>{
      console.log(data)
      this.total = data.TotalFamily
      this.qualified = data.TotalQualified
      this.malnutrision = data.TotalMalnorished
      this.pregnant = data.TotalPregnant
      this.tuborcolosis = data.TotalTuborcolosis
    });
  }

  updateTotal(){
    this.userService.getDashboard(this.authService.jwttoken).subscribe(data=>{
      // console.log(data)
      this.total = data.TotalFamily
    });
  }

  updateQualified(){
    this.userService.getDashboard(this.authService.jwttoken).subscribe(data=>{
      // console.log(data)
      this.qualified = data.TotalQualified
    });
  }

  updateMalnorished(){
    this.userService.getDashboard(this.authService.jwttoken).subscribe(data=>{
      // console.log(data)
      this.malnutrision = data.TotalMalnorished
    });
  }

  updatePregnant(){
    this.userService.getDashboard(this.authService.jwttoken).subscribe(data=>{
      // console.log(data)
      this.pregnant = data.TotalPregnant
    });
  }

  updateTuborcolosis(){
    this.userService.getDashboard(this.authService.jwttoken).subscribe(data=>{
      // console.log(data)
      this.pregnant = data.TotalTuborcolosis
    });
  }

  
  downloadLine(){
    console.log(this.divlinechart)
    // The array of numbers that you want to download
    let element = this.divlinechart

    // The months that you want to add as the first row
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Create a new workbook
    let workbook = XLSX.utils.book_new();

    // Create a worksheet and add it to the workbook
    let currentYear = new Date().getFullYear();
    let data = [[currentYear], months, element];
    let worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Numbers");

    // Generate the Excel file
    let excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });

    // Create a Blob from the buffer and create a link to download the file
    let blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "FamilyPerYear.xlsx";

    // Download the file
    link.click();
  }

  downloadBar(){
    // The array of numbers that you want to download
    let element = this.divbarchart

    // The months that you want to add as the first row
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Create a new workbook
    let workbook = XLSX.utils.book_new();

    // Create a worksheet and add it to the workbook
    let currentYear = new Date().getFullYear();
    let data = [[currentYear], months, element];
    let worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Numbers");

    // Generate the Excel file
    let excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });

    // Create a Blob from the buffer and create a link to download the file
    let blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "MalePerYear.xlsx";

    // Download the file
    link.click();
  }

  downloadBar2(){
    // The array of numbers that you want to download
    let element = this.divbarchart2

    // The months that you want to add as the first row
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Create a new workbook
    let workbook = XLSX.utils.book_new();

    // Create a worksheet and add it to the workbook
    let currentYear = new Date().getFullYear();
    let data = [[currentYear], months, element];
    let worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Numbers");

    // Generate the Excel file
    let excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });

    // Create a Blob from the buffer and create a link to download the file
    let blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "FemalePerYear.xlsx";

    // Download the file
    link.click();
  }

  downloadBar3(){
    // The array of numbers that you want to download
    let element = this.divbarchart3

    // The months that you want to add as the first row
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Create a new workbook
    let workbook = XLSX.utils.book_new();

    // Create a worksheet and add it to the workbook
    let currentYear = new Date().getFullYear();
    let data = [[currentYear], months, element];
    let worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Numbers");

    // Generate the Excel file
    let excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });

    // Create a Blob from the buffer and create a link to download the file
    let blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "Qualified4psPerYear.xlsx";

    // Download the file
    link.click();
  }

  downloadBar4(){
    // The array of numbers that you want to download
    let element = this.divbarchart4

    // The months that you want to add as the first row
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Create a new workbook
    let workbook = XLSX.utils.book_new();

    // Create a worksheet and add it to the workbook
    let currentYear = new Date().getFullYear();
    let data = [[currentYear], months, element];
    let worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Numbers");

    // Generate the Excel file
    let excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });

    // Create a Blob from the buffer and create a link to download the file
    let blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "PergnantPerYear.xlsx";

    // Download the file
    link.click();
  }

  downloadBar5(){
    // The array of numbers that you want to download
    console.log(this.divbarchart5)
    let element = this.divbarchart5

    // The months that you want to add as the first row
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Create a new workbook
    let workbook = XLSX.utils.book_new();

    // Create a worksheet and add it to the workbook
    let currentYear = new Date().getFullYear();
    let data = [[currentYear], months, element];
    let worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Numbers");

    // Generate the Excel file
    let excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });

    // Create a Blob from the buffer and create a link to download the file
    let blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "TuborcolosisPerYear.xlsx";

    // Download the file
    link.click();
  }

  downloadBar6(){
    // The array of numbers that you want to download
    let element = this.divbarchart6

    // The months that you want to add as the first row
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Create a new workbook
    let workbook = XLSX.utils.book_new();

    // Create a worksheet and add it to the workbook
    let currentYear = new Date().getFullYear();
    let data = [[currentYear], months, element];
    let worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Numbers");

    // Generate the Excel file
    let excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });

    // Create a Blob from the buffer and create a link to download the file
    let blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "MalnutrisionPerYear.xlsx";

    // Download the file
    link.click();
  }

}
