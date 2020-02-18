import { skillService } from './../skillService';
import { Skill } from './../../Model/Skill';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-skill',
  templateUrl: './list-skill.component.html',
  styleUrls: ['./list-skill.component.css']
})
export class ListSkillComponent implements OnInit {
skills:Skill[]
  constructor(private httpservice:skillService,private router:Router) { }

  ngOnInit() {
    this.listSkills()
  }
  listSkills(){
    this.httpservice.getAllSkills().subscribe(data =>{
      this.skills=data;
      console.log(data)
        })
    
  }
    
  addToEmployee (skill:Skill){

    localStorage.setItem("idskill", skill.id.toString());
  
    this.router.navigate(["/addToEmployee"]);

}
addToProject(skill:Skill){

  localStorage.setItem("idskill", skill.id.toString());

  this.router.navigate(["/addToProject"]);

}
}
