import { skillService } from './../../Skill/skillService';
import { Skill } from './../../Model/Skill';
import { Project } from './../../Model/Project';
import { projectService } from './../projectService';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeProjectPeriod } from 'src/app/Model/EmployeeProjectPeriod';
 
@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {
 constructor(private router:Router, private service:projectService) { }
project:Project = new Project();
skills:Skill[];
epps:EmployeeProjectPeriod[];
  
ngOnInit() {
  this.getProject()
  

  }
getProject(){
  let id=localStorage.getItem("id");
    this.service.getProjectId(+id)
    .subscribe(data=>{
      this.project=data;
      this.getDetails(this.project);
        
    })
   
}

getDetails(project:Project){

  this.service.getEPP2(project).subscribe(data=>{
   
    this.epps=data;

  })

  this.service.getEPP3(project).subscribe(data=>{
   
    this.skills=data;

  })
}

}
