import { Skill } from './Skill';
import { EmployeeProjectPeriod } from './EmployeeProjectPeriod';
export class Employee{

   id:Number; 
   hiredate:Number;
   epplist:EmployeeProjectPeriod[];
   skilllist:Skill[];
}