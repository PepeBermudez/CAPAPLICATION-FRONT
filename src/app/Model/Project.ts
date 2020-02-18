import { Skill } from './Skill';
import { EmployeeProjectPeriod } from './EmployeeProjectPeriod';

export class Project{

    id:Number; 
    name:String;
    description:String;
    startdate:Date;
    enddate:Date;
    employeeprojectperiod:EmployeeProjectPeriod[];
    slist:Skill[];
    
}