import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';



import {catchError, retry } from 'rxjs/operators';
import { IEmployee } from '../model/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  //get All Employee
  public getAllEmployees():Observable<IEmployee[]>{
    let dataUrl:string='https://gist.githubusercontent.com/Aliza-alam/ffc22802f7c00543ae7ee0a38fc624c1/raw/b035fcc50e8222be4ab6174a2cd79736fe234984/employee-04052021.json';
   return  this.httpClient.get<IEmployee[]>(dataUrl).pipe(retry(1),catchError(this.handleError));
  }

  public handleError(error:HttpErrorResponse){
let errorMessage:string='';
if(error.error instanceof ErrorEvent){
  //client error
  errorMessage=`Error: ${error.error.message}`
}
else{
  //server error
  errorMessage=`Status: ${error.status} \n Message: ${error.message}`;
}
return throwError(errorMessage);
  }


}
