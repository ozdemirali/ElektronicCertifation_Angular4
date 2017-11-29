import { CourseDataService } from './../../services/course-data.service';
import { Component, OnInit } from '@angular/core';
import {Course} from '../../interfeces/course';
import * as moment from 'moment';

// import {CalendarModule} from 'primeng/primeng';
import { $ } from 'protractor';

@Component({
  selector: 'app-absent',
  templateUrl: './absent.component.html',
  styleUrls: ['./absent.component.css']
})
export class AbsentComponent implements OnInit {
  course:Course[];
  courseId:number=1;
  absent_date:string;
  value:Date;
  
  constructor(private courseDataService:CourseDataService) { }

  ngOnInit() {
    this.courseDataService.getCourseData().subscribe((data)=>{
      this.course=data.result;
      //console.log(this.course);
    });


  }

 

}
