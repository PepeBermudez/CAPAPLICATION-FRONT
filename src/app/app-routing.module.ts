import { DetailsProjectComponent } from './Project/details-project/details-project.component';
import { AddSkillToComponent } from './add-skill-to/add-skill-to.component';
import { AddToEmployeeComponent } from './Employee/add-to-employee/add-to-employee.component';
import { ListSkillComponent } from './Skill/list-skill/list-skill.component';
import { AddSkillComponent } from './Skill/add-skill/add-skill.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddToProjectComponent } from './Project/add-to-project/add-to-project.component';
import { EditProjectComponent } from './Project/edit-project/edit-project.component';
import { ListProjectComponent } from './Project/list-project/list-project.component';
import { AddProjectComponent } from './Project/add-project/add-project.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './User/list/listar.component';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from './User/edit/edit.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'list',component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'addEmployee', component:AddEmployeeComponent},
  {path:'listEmployee', component:ListEmployeeComponent},
  {path:'listProject', component:ListProjectComponent},
  {path:'addProject', component:AddProjectComponent},
  {path:'editProject', component:EditProjectComponent},
  {path:'addToProject', component:AddToProjectComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'addToEmployee', component:AddToEmployeeComponent},
  {path:'listSkill', component:ListSkillComponent},
  {path:'addskill', component:AddSkillComponent},
  {path:'addskillto', component:AddSkillToComponent},
  {path:'project-details', component:DetailsProjectComponent},
  {path:'employee-details', component:EmployeeDetailsComponent}
  
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
