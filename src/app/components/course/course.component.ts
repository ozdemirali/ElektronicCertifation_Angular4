import { Component, OnInit } from '@angular/core';

import { CourseDataService } from './../../services/course-data.service';
import * as moment from 'moment';
import {Course} from '../../interfeces/course';
import { rootRoute } from '@angular/router/src/router_module';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course:Course[];
  
  selectedCar: Course;
  
  cols:any[];
  
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
        
        this.cols=[
          {field:'name',header:'Adı'},
          {field:'status',header:'Durumu'},
          {field:'teacher',header:'Eğitmen'},
          {field:'qouta',header:'Kontenjan'},
          {field:'start_date',header:'Başlama Tarihi'},
          {field:'end_date',header:'Bitiş Tarihi'},
          {field:'limit',header:'Devamsızlık Sınırı'},
          {field:'hour',header:'Saat'},
        ];
    });
  }

  handleRowSelect(event) {
     console.log(event.data.id);
    //event.data = Selected row data
    
}

}

