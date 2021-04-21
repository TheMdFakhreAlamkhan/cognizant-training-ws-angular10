import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public courses:string[]=["Angular","React","Ionic","Angular Material"];

  constructor() { }

  ngOnInit(): void {
  }

}
