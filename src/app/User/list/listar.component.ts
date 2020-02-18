import { EmployeeProjectPeriod } from './../../Model/EmployeeProjectPeriod';
import { employeeService } from './../../Employee/employeeService';
import { userService } from './../userService';

import { Project } from '../../Model/Project';
import { User } from './../../Model/User';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/Employee';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  users: User[];
  projects: Project[];
  employees:Employee[];

  constructor(private httpservice: userService, private router: Router, private httpservice2: employeeService) { }

  ngOnInit() {

    this.listUser();
    this.getEmployee();

  }

  listUser() {
    this.httpservice.getAllUsers().subscribe(data => {
      this.users = data;


    })

  }
  getEmployee() {
    this.httpservice.getEmployees().subscribe(data => {
      this.employees = data;
      console.log(data)


    })

  }

  edituser(user: User) {

    localStorage.setItem("iduser", user.userid.toString());
    this.router.navigate(["/edit"]);

  }

  deleteuser(user: User) {

    this.httpservice.deleteUser(user)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);

      })
    
  }



}
