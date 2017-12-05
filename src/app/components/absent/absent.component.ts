import { CourseDataService } from './../../services/course-data.service';
import { Component, OnInit } from '@angular/core';
import {Course} from '../../interfeces/course';
import {CourseStudent} from '../../interfeces/courseStudent';
import * as moment from 'moment';

import { $ } from 'protractor';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent implements OnInit {
  courses:Course[];
  courseStudents:CourseStudent[];
  courseId:number=1;
  absent_date:Date=new Date();
  
  constructor(private courseDataService:CourseDataService) { }

  ngOnInit() {
    this.courseDataService.getCourseData().subscribe((data)=>{
      this.courses=data.result;
      //console.log(this.course);
    })
  }

  findCourseStudents(){
    this.courseDataService.getCourseStudents(this.courseId).subscribe((data)=>{
        this.courseStudents=data.result;

        for(let i in this.courseStudents){
          this.courseStudents[i].hour=0;
        }
    })
  }

  saveCourseStudentsHours(){
    let absentCourseStudentHours=[];
    for(let i in this.courseStudents){
        let item={
          Student_id:this.courseStudents[i].id,
          Course_id:this.courseId,
          hour:this.courseStudents[i].hour,
          day_date:moment(this.absent_date).format("DD/MM/YY")
        };
        absentCourseStudentHours.push(item);
    }
    console.log(absentCourseStudentHours);
    this.courseDataService.postCourseStudentsHours(absentCourseStudentHours).subscribe((data)=>{
      this.findCourseStudents();
    })
  }
}