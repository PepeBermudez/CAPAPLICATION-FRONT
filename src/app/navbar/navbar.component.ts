import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  listEmployees(){
    this.router.navigate(["/listEmployee"]);
  }
  listProjects(){
    this.router.navigate(["/listProject"]);
  }
  listSkills(){
    this.router.navigate(["/listSkill"]);
  }
  login(){
    this.router.navigate(["/login"]);
  }

}
