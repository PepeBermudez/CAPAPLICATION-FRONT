import { User } from './../../Model/User';
import { userService } from './../../User/userService';
import { EmployeeProjectPeriod } from './../../Model/EmployeeProjectPeriod';
import { Skill } from './../../Model/Skill';
import { Employee } from './../../Model/Employee';
import { Router } from '@angular/router';
import { employeeService } from './../employeeService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  skills: Skill[];
  epps: EmployeeProjectPeriod[];

  constructor(private router: Router, private service: employeeService, private service2:userService) { }
  employee: Employee = new Employee();
  user:User= new User();
  
  
  ngOnInit() {
    this.getEmployee();
    
  }
  getEmployee() {

    let id = localStorage.getItem("id");
    this.service.getEmployeeId(+id).subscribe(data => {
      this.employee = data;
      this.getDetails(this.employee);
      this.getUser(this.employee.id)
      this.getSkill(this.employee)
    })

  }

  getDetails(employee: Employee) {
    this.service.getEPP(employee).subscribe(data => {
        this.epps=data;
    }) 

    this.service.getEPP2(employee).subscribe(data=>{
      this.skills=data;
    })

  }
  getUser( id:Number){
    this.service2.getUserId(+id).subscribe(data=>{
      this.user=data
      console.log(this.user)
    })
  }
  
  getSkill(employee:Employee){
    this.service.getEmployeeSkill(employee).subscribe(data=>{
      this.skills=data
      console.log("FUNCIONA?",data)
      
    })
  }
}
