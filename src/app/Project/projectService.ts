
import { Skill } from './../Model/Skill';
import { EmployeeProjectPeriod } from './../Model/EmployeeProjectPeriod';
import { Employee } from '../Model/Employee';
import { User } from '../Model/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Project } from '../Model/Project';

@Injectable({
  providedIn: 'root'
})
export class projectService {
  user: User[];
  projects: Project[];

  constructor(private http: HttpClient) { }

  addProjectURL = 'http://localhost:8080/capApplication/addprojects';
 
  updateProjectURL = 'http://localhost:8080/capApplication/editProject';
  listProjectURL = 'http://localhost:8080/capApplication/listprojects';
  addToProject = 'http://localhost:8080/capApplication/addToProject';
  deleteURL='http://localhost:8080/capApplication/project/';
  getEPPURL='http://localhost:8080/capApplication/getEPP';
  getEPPURL2='http://localhost:8080/capApplication/getEPP2';
  addSkillToProjectURL='http://localhost:8080/capApplication/addSkillToProject'
  listprojectemployeeURL='http://localhost:8080/capApplication/listProjectEmployee'
 
  getAllProject() {
    return this.http.get<Project[]>(this.listProjectURL);
  }
  getEPP(){
    return this.http.get<EmployeeProjectPeriod[]>(this.getEPPURL);
  }
  getEPP2(project:Project){
    return this.http.get<EmployeeProjectPeriod[]>(this.getEPPURL+"/"+project.id);
  }
  getEPP3(project:Project){
    return this.http.get<Skill[]>(this.getEPPURL2+"/"+project.id);
  }


  addProject(project: Project) {
    this.http.post<Project>(this.addProjectURL, project).subscribe(data => {

    });
  }
  addProject2(project: Project, skill:Skill) {
    this.http.post(this.addProjectURL, {project,Skill}).subscribe(data => {

    });
  }

  getProjectId(id: number) {
    return this.http.get<Project>(this.updateProjectURL + "/" + id);
  }

  deleteProject(project:Project){
    return this.http.delete<Project>(this.deleteURL+project.id);
  }

  updateProject(project: Project) {
    return this.http.put<Project>(this.updateProjectURL + "/" + project.id, project);
  }

addSkillToProject(project:Project, skill:Skill){
  return this.http.post(this.addSkillToProjectURL + "/" + project.id + "/" + "skill" + "/" + skill.id, {});
}

  addEmployeeToProject(project: Project, employee: Employee) {
    return this.http.post(this.addToProject + "/" + project.id + "/" + "employee" + "/" + employee.id, {});
  }
}