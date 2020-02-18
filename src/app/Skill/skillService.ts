import { Skill } from './../Model/Skill';
import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Employee } from './../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class skillService {

  constructor(private http: HttpClient) { }

  skills: Skill[]
  listSkillURL = 'http://localhost:8080/capApplication/listSkills';
  addSkillURL = 'http://localhost:8080/capApplication/addSkill';
  getOneSkillURL = 'http://localhost:8080/capApplication/listSkill';

  getAllSkills() {
    return this.http.get<Skill[]>(this.listSkillURL);
  }

  getOneSkill(id: Number) {

    return this.http.get<Skill>(this.getOneSkillURL + "/" + id);

  }


  addSkill(skill: Skill) {
    this.http.post<Skill>(this.addSkillURL, skill).subscribe(data => {

    });
  }




}