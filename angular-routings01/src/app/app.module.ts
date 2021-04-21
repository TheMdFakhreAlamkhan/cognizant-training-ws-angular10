import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import  { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, EmployeesComponent, StocksComponent, AboutComponent, EmployeeDetailsComponent,],
  imports: [BrowserModule, AppRoutingModule,FormsModule,  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
