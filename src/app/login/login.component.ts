import { userService } from './../User/userService';
import { User } from './../Model/User';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    userid: null,
    firstname: null,
    lastname: null,
    email: "",
    password: "",
    employee: null,
    logged: null
  }
  constructor(private http: userService, private router: Router) { }
  ans: any;
  ngOnInit() {

  }

  login(event) {
  
  this.router.navigate(["/home"])
  }

}
