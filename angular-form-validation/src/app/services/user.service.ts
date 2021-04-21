import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/IUser';

import { retry,catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }




  //enroll
public enroll(user:IUser):Observable<{msg:string}>{
let dataUrl=`http://127.0.0.1:5000/user/enroll`;
return this.httpClient.post<{msg:string}>(dataUrl,user).pipe(retry(1),catchError(this.handleError));
}

  //register
  public register(user:IUser):Observable<{msg:string}>{
    let dataUrl=`http://127.0.0.1:5000/user/register`;
    return this.httpClient.post<{msg:string}>(dataUrl,user).pipe(retry(1),catchError(this.handleError));
    }


//handle error
public handleError(error:HttpErrorResponse){
let errorMessage:string='';
if(error.error instanceof ErrorEvent){
  //client Error
  errorMessage=`Error: ${error.error.message}`
}
else{
  //server error
  errorMessage=`Status: ${error.status} \n Message: ${error.message}`;
}
return throwError(errorMessage);
}


}
