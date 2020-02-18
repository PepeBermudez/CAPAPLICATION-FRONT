import { Skill } from './../Model/Skill';
import { skillService } from './../Skill/skillService';
import { projectService } from './../Project/projectService';
import { EmployeeProjectPeriod } from './../Model/EmployeeProjectPeriod';
import { Project } from './../Model/Project';
import { Router } from '@angular/router';
import { employeeService } from './../Employee/employeeService';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-add-skill-to',
  templateUrl: './add-skill-to.component.html',
  styleUrls: ['./add-skill-to.component.css']
})
export class AddSkillToComponent implements OnInit {

  constructor(private httpservice: employeeService, private router: Router,private httpservice2: projectService,private httpservice3:skillService) { }
  employees: Employee[];
  projects: Project[];
  employee: Employee = new Employee(); 
  epps: EmployeeProjectPeriod[];
  skills:Skill[]

  ngOnInit() {
    this.listEmployees();
    this.listProject();
    this.getEmployeePP();
    this.listEmployees();
    this.listSkills();
  }
  listEmployees() {
    this.httpservice.getAllEmployees().subscribe(data => {
      this.employees = data;
    })

  }

  deleteemployee(employee: Employee) {

    this.httpservice.deleteEmployee(employee)
      .subscribe(data => {
        this.employees = this.employees.filter(e => e !== employee);
        alert("Se ha borrado un empleado");
      })
  }

  addToProject(employee: Employee) {

    localStorage.setItem("idEmployee", employee.id.toString());
    this.router.navigate(["/addToProject"]);

  }

  listProject() {
    this.httpservice2.getAllProject().subscribe(data => {
      this.projects = data;


    })

  }
  getEmployeePP(){
    this.httpservice2.getEPP().subscribe(data =>{
      this.epps=data;
    })
  }

  deleteproject(project: Project) {

    this.httpservice2.deleteProject(project)
      .subscribe(data => {
        this.projects = this.projects.filter(p => p !== project);

      })

  }

  editProject(project: Project) {

    localStorage.setItem("id", project.id.toString());
    this.router.navigate(["/editProject"]);

  }

  listSkills(){
    this.httpservice3.getAllSkills().subscribe(data =>{
      this.skills=data;
        })
    
  }
  addToEmployee (skill:Skill){

    localStorage.setItem("idskill", skill.id.toString());
    alert(); 
    this.router.navigate(["/addToEmployee"]);

}

}
