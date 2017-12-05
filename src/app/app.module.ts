import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import{HttpModule} from '@angular/http';
import {CalendarModule} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { AbsentComponent } from './components/absent/absent.component';

import {CourseDataService} from './services/course-data.service';
import { AddCourseComponent } from './components/add-course/add-course.component';



const appRoutes:Routes=[
  {path:'',component:CourseComponent},
  {path:'absent',component:AbsentComponent},
  {path:'addCourse',component:AddCourseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AbsentComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [CourseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
