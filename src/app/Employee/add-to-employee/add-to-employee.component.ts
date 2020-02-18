import { Skill } from './../../Model/Skill';
import { skillService } from './../../Skill/skillService';
import { Router } from '@angular/router';
import { employeeService } from './../employeeService';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/Employee';

@Component({
  selector: 'app-add-to-employee',
  templateUrl: './add-to-employee.component.html',
  styleUrls: ['./add-to-employee.component.css']
})
export class AddToEmployeeComponent implements OnInit {

  employees: Employee[]
  employee: Employee = new Employee();
  skill:Skill = new Skill();
  constructor(private router: Router, private service: employeeService, private service2:skillService) { }

  ngOnInit() {
    this.listEmployees();
    let id = localStorage.getItem("idskill");
    
    this.service2.getOneSkill(+id)
      .subscribe(data => {
        this.skill = data;
        
      })

  }

  listEmployees() {
    this.service.getAllEmployees().subscribe(data => {
      this.employees = data;
    })

  }

  addSkillToEmployee(employee: Employee) {

    this.update(employee, this.skill)

  }

  update(employee: Employee, skill: Skill) {
    this.service.addSkillToEmployee(employee,skill)
      .subscribe(data => {

        alert("Se ha actualizado con exito");
        this.router.navigate(["listEmployee"]);

      })

  }

}
