import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IEmployee } from 'src/app/model/IEmployee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employeeId:number;

  public selectedEmployee:IEmployee;




  constructor(private ActivatedRoute:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params:ParamMap)=>{
this.employeeId=Number(params.get('id'));
    });

    this.employeeService.getAllEmployees().subscribe((data)=>{

      let AllEmployees:IEmployee[]=data;
      this.selectedEmployee=AllEmployees.find(employee=>employee.id===this.employeeId);
    });
  }

  
}
