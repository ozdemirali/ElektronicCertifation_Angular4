import { Component, OnInit } from '@angular/core';

import { CourseDataService } from './../../services/course-data.service';
import * as moment from 'moment';
import {Course} from '../../interfeces/course';
import { rootRoute } from '@angular/router/src/router_module';

import {Router} from'@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course:Course[];
  
  selectedCar: Course;
  
  cols:any[];
  
  constructor(private courseDataService:CourseDataService,private router:Router) { }

  ngOnInit() {
    this.courseDataService.getCourseData().subscribe((data)=>{
     // console.log(data.result);
      this.course=data.result;
      for(let i=0;i<this.course.length;i++)
        {
          if(this.course[i].status==false)
            this.course[i].status="Bitti";
          else
            this.course[i].status="Devam Ediyor";  

          this.course[i].start_date=moment( this.course[i].start_date).format('DD/MM/YYYY');
          this.course[i].end_date=moment( this.course[i].end_date).format('DD/MM/YYYY');
        }
        //console.log(this.course);
        
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
     //console.log(event.data.id);
      let path:any;
      path="detail/"+event.data.id;

     this.router.navigateByUrl(path);
    //event.data = Selected row data
    
}

}

