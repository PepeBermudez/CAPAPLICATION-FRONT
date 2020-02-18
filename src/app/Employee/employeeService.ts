import { EmployeeProjectPeriod } from './../Model/EmployeeProjectPeriod';
import { Skill } from './../Model/Skill';
import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Employee } from './../Model/Employee';
import { User } from './../Model/User';
import {Project} from '../Model/Project'; 
@Injectable({
  providedIn: 'root'
})
export class employeeService{
    user:User[];
    projects:Project[];
  
    constructor(private http:HttpClient) { }
   
    addEmployeeURL='http://localhost:8080/capApplication/addemployee'
    deleteURL='http://localhost:8080/capApplication';
    listProjectURL='http://localhost:8080/capApplication/listProject';
    listEmployees='http://localhost:8080/capApplication/listEmployees';
    deleteEmployeeURL='http://localhost:8080/capApplication/listEmployee';
    addEmployeeToProjectURL='http://localhost:8080/capApplication/projects'
    addSkillToEmployeeURL='http://localhost:8080/capApplication/addToEmployee';
    getSkillURL='http://localhost:8080/capApplication/getEmployeeSkills'
    getEPPURL='http://localhost:8080/capApplication/getEmployeePP';
   
    getAllEmployees(){
        return this.http.get<Employee[]>(this.listEmployees);
      }
    
      getEmployeeId(id:number){
        return this.http.get<Employee>(this.listProjectURL+"/"+id);
      }
      getEPP(employee:Employee){
        return this.http.get<EmployeeProjectPeriod[]>(this.getEPPURL+"/"+employee.id);
      }
      getEPP2(employee:Employee){
        return this.http.get<Skill[]>(this.getSkillURL+"/"+employee.id);
      }
      deleteEmployee(employee:Employee){
        return this.http.delete<Employee>(this.deleteURL+"/"+employee.id);
      }
      addEmployee(user:User){
        console.log(user.userid);
        return this.http.post<Employee>(this.addEmployeeURL+"/"+user.userid, {}).subscribe();
      }
      
      addSkillToEmployee(employee:Employee, skill:Skill){
        return this.http.post(this.addSkillToEmployeeURL+"/"+employee.id+"/"+"skill"+"/"+skill.id, {});
      } 
      getEmployeeSkill(employee:Employee){
        return this.http.get<Skill[]>(this.getSkillURL+"/"+employee.id);
      }


}
