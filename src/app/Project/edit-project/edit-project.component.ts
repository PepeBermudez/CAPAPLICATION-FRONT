import { projectService } from './../projectService';
import { Employee } from './../../Model/Employee';
import { Project } from './../../Model/Project';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor(private router:Router, private service:projectService) { }
project:Project = new Project();
employee:Employee = new Employee();
  ngOnInit() {
    this.editProject();
    
  }
  editProject(){
    
    let id=localStorage.getItem("id");
    this.service.getProjectId(+id)
    .subscribe(data=>{
      this.project=data;
    })
  }
 
  update(project:Project){
        this.service.updateProject(project)
        .subscribe(data =>{
          this.project=data;
          alert("Se ha actualizado con exito");
          this.router.navigate(["listProject"]);
    
        })
      } 

}
