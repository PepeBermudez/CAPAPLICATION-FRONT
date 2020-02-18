import { User } from './Model/User';
import { userService } from './User/userService';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarComponent } from './User/list/listar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capApplication';
 
  isLogged: any =false
  constructor(private router: Router) { }


  OnInit() {
    
  }
  


}
