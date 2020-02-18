import { User } from './../../Model/User';
import { userService } from './../../User/userService';
import { EmployeeProjectPeriod } from './../../Model/EmployeeProjectPeriod';
import { projectService } from './../projectService';
import { Employee } from './../../Model/Employee';
import { Project } from './../../Model/Project';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  constructor(private httpservice: projectService, private router: Router,private http:userService) { }
  projects: Project[];
  u:User
  aux:any=false
  employee: Employee = new Employee();
  epps: EmployeeProjectPeriod[];


  ngOnInit() {
   
    this.listProject();

   

  }
 

  listProject() {
    
    this.httpservice.getAllProject().subscribe(data => {
      console.log(data)
      this.projects = data;

    })

  }

  

  addEmployee(project: Project) {

    localStorage.setItem("id", project.id.toString());
    localStorage.setItem("id", this.employee.id.toString());
    this.router.navigate(["/editProject"]);

  }

  deleteproject(project: Project) {

    this.httpservice.deleteProject(project)
      .subscribe(data => {
        this.projects = this.projects.filter(p => p !== project);

      })

  }
  projectdetails(project: Project) {

    localStorage.setItem("id", project.id.toString());
    this.router.navigate(["/project-details"]);
 

  }
  editProject(project: Project) {

    localStorage.setItem("id", project.id.toString());
    this.router.navigate(["/editProject"]);

  }



}
