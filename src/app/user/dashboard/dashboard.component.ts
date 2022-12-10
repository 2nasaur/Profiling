import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  lineChartData = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [0, 0, 0, 0, 89, 34, 43, 54, 28, 74, 93, 54],
        label: 'Numbers of Owner Residents Registered',
        fill: true
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

  barChartData1 = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [0, 0, 0, 0, 89, 34, 43, 54, 28, 74, 93, 54],
        label: 'Number of Mens',
        fill: true,
        // backgroundColor: 'rgba(255, 255, 0, 0.3',
        // borderColor: 'black'
      }
    ]
  }

  barChartData = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data: [0, 0, 0, 0, 89, 34, 43, 54, 28, 74, 93, 54],
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
        data: [0, 0, 0, 0, 89, 34, 43, 54, 28, 74, 93, 54],
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
        data: [0, 0, 0, 0, 89, 34, 43, 54, 28, 74, 93, 54],
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
        data: [0, 0, 0, 0, 89, 34, 43, 54, 28, 74, 93, 54],
        label: 'Number of Pregnant',
        fill: true,
        // backgroundColor: 'rgba(255, 255, 0, 0.3',
        // borderColor: 'black'
      }
    ]
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // go(){
  //   this.router.navigate(['user/create-profile']);
  // }

  

}
