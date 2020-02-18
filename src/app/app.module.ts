import { User } from './Model/User';
import { userService } from './User/userService';
import { Router } from '@angular/router';
import { ServiceService } from './Service/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './User/list/listar.component';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from './User/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@Angular/common/http';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './Employee/delete-employee/delete-employee.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { ListProjectComponent } from './Project/list-project/list-project.component';
import { AddProjectComponent } from './Project/add-project/add-project.component';
import { EditProjectComponent } from './Project/edit-project/edit-project.component';
import { AddToProjectComponent } from './Project/add-to-project/add-to-project.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddSkillComponent } from './Skill/add-skill/add-skill.component';
import { ListSkillComponent } from './Skill/list-skill/list-skill.component';
import { AddToEmployeeComponent } from './Employee/add-to-employee/add-to-employee.component';
import { AddSkillToComponent } from './add-skill-to/add-skill-to.component';
import { DetailsProjectComponent } from './Project/details-project/details-project.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,



    AddEmployeeComponent,


    DeleteEmployeeComponent,


    ListEmployeeComponent,


    ListProjectComponent,


    AddProjectComponent,


    EditProjectComponent,


    AddToProjectComponent,


    LoginComponent,


    NavbarComponent,


    HomeComponent,


    AddSkillComponent,


    ListSkillComponent,


    AddToEmployeeComponent,


    AddSkillToComponent,


    DetailsProjectComponent,


    EmployeeDetailsComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  
}
