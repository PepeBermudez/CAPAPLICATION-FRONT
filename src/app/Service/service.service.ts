import { EmployeeProjectPeriod } from './../Model/EmployeeProjectPeriod';
import { Employee } from './../Model/Employee';
import { User } from './../Model/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

import {Project} from '../Model/Project';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user:User[];
  projects:Project[];

  constructor(private http:HttpClient) { }
  
 
 
}
