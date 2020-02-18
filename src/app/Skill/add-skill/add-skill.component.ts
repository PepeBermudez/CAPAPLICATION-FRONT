import { User } from './../../Model/User';
import { userService } from './../../User/userService';
import { Skill } from './../../Model/Skill';
import { skillService } from './../skillService';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  u:User
  aux:any=false
  constructor(private router:Router, private service:skillService,private http:userService) { }
skill:Skill={
  id:null,
  name:"",
  description:""
}
  ngOnInit() {
  }

 
addSkill(skill:Skill){
  console.log(skill)
  this.service.addSkill(skill);
}
}
