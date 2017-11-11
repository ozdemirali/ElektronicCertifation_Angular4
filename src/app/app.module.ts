import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { AbsentComponent } from './components/absent/absent.component';

import {CourseDataService} from './services/course-data.service';



const appRoutes:Routes=[
  {path:'',component:CourseComponent},
  {path:'absent',component:AbsentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AbsentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [CourseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
