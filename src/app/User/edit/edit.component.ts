import { userService } from './../userService';
import { User } from './../../Model/User';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router: Router, private service: userService) { }
  user: User = new User();
  ngOnInit() {
    this.editUser()
  }
  editUser() {

    let id = localStorage.getItem("iduser");
    this.service.getUserId(+id)
      .subscribe(data => {
        this.user = data;
      })
  }
 
  update(user: User) {
    this.service.updateUser(user)
      .subscribe(data => {
        this.user = data;
        alert("Se ha actualizado con exito");
        this.router.navigate(["list"]);

      })
  }

}
