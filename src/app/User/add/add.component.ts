import { employeeService } from './../../Employee/employeeService';
import { userService } from './../userService';
import { Employee } from './../../Model/Employee';
import { User } from './../../Model/User';
import { Router } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {


  constructor(private router: Router, private service: userService, private service2: employeeService, private http: userService) { }
  u: User
  aux: any = false
  user: User = {
    userid: null,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    employee: null,
    logged: null
  }
  employee: Employee = new Employee();

  ngOnInit() {

  }



  addUser(user: User) {



    this.service.addUser(user).subscribe(data => {
      this.addE(data as User);
    })


    this.router.navigate(["/list"]);
  }
  addE(user: User) {
    this.service2.addEmployee(user);
  }

}





