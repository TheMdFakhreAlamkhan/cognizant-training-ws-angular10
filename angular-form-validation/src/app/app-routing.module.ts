import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [


{path:'', component:HomeComponent},
{path:'enroll',component:EnrollmentComponent},
{path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
