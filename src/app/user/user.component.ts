import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  sideNavVisible:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.sideNavVisible = !this.sideNavVisible;
  }
}