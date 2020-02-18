import { User } from './../../Model/User';
import { userService } from './../../User/userService';
import { Skill } from './../../Model/Skill';
import { skillService } from './../../Skill/skillService';
import { projectService } from './../projectService';
import { Project } from './../../Model/Project';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
skills:Skill[]
skillProject:Skill[]
u:User
aux:any=false
  constructor(private router:Router, private service:projectService, private service2:skillService, private http:userService) { }
 project:Project ={
   id:null,
   name:"",
   description:"",
   startdate:null,
   enddate:null,
   employeeprojectperiod:null,
   slist:null
 }
  ngOnInit() {
    this.getAllSkill()
  }

 

  addProject(project:Project){
    
     
   this.service.addProject(project);
}
getAllSkill(){
  this.service2.getAllSkills().subscribe(data=>{
    this.skills=data;
  })
}

}
