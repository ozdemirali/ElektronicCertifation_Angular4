import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpAddress} from '../services/http-address';
import * as moment from 'moment';





@Injectable()
export class CourseDataService {



  constructor(public http:Http) {

    //console.log("courseDataService connected..");
    //console.log(HttpAddress.getCourseDataAll);
  }

  /*Tüm Kursları getirir */
  getCourseData(){
    return this.http.get(HttpAddress.course.toString())
      .map(res=>res.json());
  }

  /*Kuslara ait öğrencileri getirir  */
  getCourseStudents(id:number){
    return this.http.get(HttpAddress.findCourseStudents.toString()+id)
      .map(res=>res.json());
  }

  postCourseStudentsHours(item:Array<any>){
    return this.http.post(HttpAddress.saveCourseStudentsHours.toString(),item)
      .map(res=>res.json());
  }  

  postNewCourse(item){
       item.start_date=moment(item.start_date).format('DD/MM/YYYY');
       item.end_date=moment(item.end_date).format('DD/MM/YYYY');
       return this.http.post(HttpAddress.course.toString(),item)
        .map(res=>res.json());
  }

  postCourseStudent(item){
      console.log(item);
  }
   
   


}
