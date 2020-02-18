import { User } from './../../Model/User';
import { userService } from './../../User/userService';
import { EmployeeProjectPeriod } from './../../Model/EmployeeProjectPeriod';
import { projectService } from './../../Project/projectService';
import { Skill } from './../../Model/Skill';
import { employeeService } from './../employeeService';
import { Project } from './../../Model/Project';
import { Employee } from './../../Model/Employee';

import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private httpservice:employeeService,private router:Router, private ht:projectService,private http:userService) { }
  employees:Employee[];
  epps:EmployeeProjectPeriod[]
  u:User
  aux:any=false
  

  ngOnInit() {
    this.listEmployees();
   
    
  }

  listEmployees(){
    this.httpservice.getAllEmployees().subscribe(data =>{
      this.employees=data;
        })
   
  }
 

  employee_details(employee:Employee){
    localStorage.setItem("id", employee.id.toString());
    this.router.navigate(["/employee-details"])
  }

  deleteemployee(employee: Employee){

        this.httpservice.deleteEmployee(employee)
        .subscribe(data =>{
          this.employees=this.employees.filter(e=>e!==employee);
          alert("Se ha borrado un empleado");
        })
      }
  
    addToProject (employee:Employee){

    localStorage.setItem("idEmployee", employee.id.toString());
    this.router.navigate(["/addToProject"]);

}
 

  
  

}
