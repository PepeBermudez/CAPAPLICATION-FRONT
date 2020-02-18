import { User } from './../Model/User';
import { userService } from './../User/userService';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http:userService) { }
u:User
aux:any=false
  ngOnInit() {
    
  }

  List() {
    this.router.navigate(["list"]);
  }
  Skill(){
    this.router.navigate(["addskill"]);
  }
  add() {
    this.router.navigate(["add"]);
  }
  addProject() {
    this.router.navigate(["addProject"]);
  }
  listProyect() {
    this.router.navigate(["listProject"]);
  }

  listEmployee() {
    this.router.navigate(["listEmployee"]);
  }
}
