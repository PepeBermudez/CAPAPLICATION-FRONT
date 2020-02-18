import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Employee } from './../Model/Employee';
import { User } from './../Model/User';
import { Project } from '../Model/Project';
@Injectable({
  providedIn: 'root'
})
export class userService {

  user: User[];
  projects: Project[];

  constructor(private http: HttpClient) { }

  listuserURL = 'http://localhost:8080/capApplication/list';
  updateURL = 'http://localhost:8080/capApplication';
  deleteURL = 'http://localhost:8080/capApplication';
  adduserURL = 'http://localhost:8080/capApplication/add';
  getEmployeeURL = 'http://localhost:8080/capApplication/getEmployee/';
  loginURL = 'http://localhost:8080/capApplication/login'
  isLoggedURL = 'http://localhost:8080/capApplication/isLogged'

  getAllUsers() {
    return this.http.get<User[]>(this.listuserURL);
  }

  getEmployees() {
    return this.http.get<Employee[]>(this.getEmployeeURL);
  }

  login(user: User) {
    return this.http.put<User>(this.loginURL, user);
  }
  isLogged(user: User) {
    return this.http.get<User>(this.isLoggedURL + "/" + user.userid);
  }

  getUserId(id: number) {
    return this.http.get<User>(this.updateURL + "/" + id);
  }

  deleteUser(user: User) {
    return this.http.delete<User>(this.deleteURL + "/" + user.userid);
  }

  updateUser(user: User) {
    return this.http.put<User>(this.updateURL + "/" + user.userid, user);
  }


  addUser(user: User) {
    return this.http.post<User>(this.adduserURL, user);
  }


}