import { Component, OnInit } from '@angular/core';
import { MatMultiYearView } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../user.service';

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


  divlinechart:any

  divbarchart:any
  divbarchart2:any
  divbarchart3:any
  divbarchart4:any
  divbarchart5:any


  lineChartData = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [],
        label: 'Numbers of Owner Residents Registered',
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
        label: 'Number of Mens',
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
        label: 'Number of Womans',
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
        label: 'Number of Qualified for 4ps',
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
        label: 'Number of Pregnant',
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
        label: 'Tuborcolosis Cases',
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
      this.divbarchart5 = data.PregnantYr

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

  

}
