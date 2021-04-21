import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { StocksComponent } from './components/stocks/stocks.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'employees', component:EmployeesComponent},
  {path:'employees/:id', component: EmployeeDetailsComponent},
  {path:'stocks', component: StocksComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
