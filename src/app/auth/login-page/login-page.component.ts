import { Component, Input, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hide=true;
  

  //mock login 
  username:any
  password:any;
  
  constructor(private router: Router) { 
    localStorage.clear()
  }
  
  ngOnInit(): void {
  }

  login(){
    console.log(this.username, this.password)
    if(this.username === 'username' && this.password === 'password' ){
      localStorage.setItem('token',"CSJL")
    this.router.navigate(['user/dashboard']);
      alert('Login Successfully ');
      
    } 
    else{
      alert('Incorrect credentials');
    }
  
  }

}

