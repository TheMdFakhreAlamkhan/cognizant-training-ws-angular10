import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import  { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, RegisterComponent, EnrollmentComponent,],
  imports: [BrowserModule, AppRoutingModule,FormsModule,  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
