import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  public user:IUser={
    name:'',
    email:'',
    password:'',
    course:'',
  };
public isEmpty:boolean; 
public message:string;
public isSubmitted:boolean;


  public courses:string[]=["Angular","React","Ionic","Angular Material"];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  public enrollSubmit(){
let {name, email, password, course}=this.user;
if(name!=='' && email!=='' && password!=='' && course!==''){
  this.isEmpty=false;
  this.userService.enroll(this.user).subscribe((data)=>{
    
this.message=data.msg;
this.isSubmitted=true;
  })
}
else{
  this.isEmpty=true;
  this.isSubmitted=false;
}
  }

}
