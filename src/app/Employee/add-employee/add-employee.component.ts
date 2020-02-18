import { userService } from './../../User/userService';
import { employeeService } from './../employeeService';
import { getDefaultService } from 'selenium-webdriver/chrome';
import { Employee } from './../../Model/Employee';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { User } from './../../Model/User';
import { Component, OnInit } from '@angular/core';
import {CalendarKey} from 'moment'
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  
  constructor(private router:Router, private service:userService) { }
user:User = new User();
employee:Employee= new Employee();
  ngOnInit() {
this.editUser()
  }
editUser(){
  let id=localStorage.getItem("id");
  this.service.getUserId(+id)
  .subscribe(data=>{
    this.user=data;
  })
}
fecha:CalendarKey

addEmployee(user : User){
  
    } 

}

