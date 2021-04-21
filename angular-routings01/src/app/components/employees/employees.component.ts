import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/model/IEmployee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees:IEmployee[]=[];
  public erroeMessage:string;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((data)=>{
      this.employees=data;
    },(error)=>{
      this.erroeMessage=error;
    });
  }

}
