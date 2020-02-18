import { Skill } from './../../Model/Skill';
import { skillService } from './../../Skill/skillService';
import { employeeService } from './../../Employee/employeeService';
import { projectService } from './../projectService';
import { Project } from './../../Model/Project';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/Employee';

@Component({
  selector: 'app-add-to-project',
  templateUrl: './add-to-project.component.html',
  styleUrls: ['./add-to-project.component.css']
})
export class AddToProjectComponent implements OnInit {

  constructor(private router: Router, private service: projectService, private service2: employeeService,private service3: skillService) { }

  projects: Project[]
  project: Project = new Project();
  skill:Skill = new Skill();
  employee: Employee = new Employee();

  ngOnInit() {
    this.listProject();
    let id = localStorage.getItem("idEmployee");
    let skill = localStorage.getItem("idskill");
    this.service2.getEmployeeId(+id)
      .subscribe(data => {
        this.employee = data;
        
      })
      this.service3.getOneSkill(+skill).subscribe(data =>{this.skill=data})
  }

  listProject() {
    this.service.getAllProject().subscribe(data => {
      this.projects = data;


    })
  }
  addSkillToProject(project:Project){
    this.service.addSkillToProject(project, this.skill).subscribe(data=>{})
  }
  addEmployeeToProject(project: Project) {
    this.update(this.employee, project)

  }
  update(employee: Employee, project: Project) {
    this.service.addEmployeeToProject(project, employee)
      .subscribe(data => {

        alert("Se ha actualizado con exito");
        this.router.navigate(["listProject"]);

      })
  }
}
 