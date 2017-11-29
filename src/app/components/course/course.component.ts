import { Component, OnInit } from '@angular/core';
import { CourseDataService } from './../../services/course-data.service';
import * as moment from 'moment';
import {Course} from '../../interfeces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course:Course[];

  constructor(private courseDataService:CourseDataService) { }

  ngOnInit() {
    this.courseDataService.getCourseData().subscribe((data)=>{
     // console.log(data.result);
      this.course=data.result;
      for(let i=0;i<this.course.length;i++)
        {
          this.course[i].start_date=moment( this.course[i].start_date).format('DD/MM/YYYY');
          this.course[i].end_date=moment( this.course[i].end_date).format('DD/MM/YYYY');
        }
    });
  }

}

