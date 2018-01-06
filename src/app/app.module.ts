import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import{HttpModule} from '@angular/http';

import {CalendarModule,DataTableModule,SharedModule} from 'primeng/primeng';



import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { AbsentComponent } from './components/absent/absent.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { DetailCourseComponent } from './components/detail-course/detail-course.component';

import {CourseDataService} from './services/course-data.service';
import { TeacherDataService } from './services/teacher-data.service';
import { StudentDataService } from './services/student-data.service';






const appRoutes:Routes=[
  {path:'',component:CourseComponent},
  {path:'absent',component:AbsentComponent},
  {path:'addCourse',component:AddCourseComponent},
  {path:'detail/:id',component:DetailCourseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AbsentComponent,
    AddCourseComponent,
    DetailCourseComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    DataTableModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [CourseDataService,TeacherDataService,StudentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
