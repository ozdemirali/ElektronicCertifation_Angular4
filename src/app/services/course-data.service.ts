import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpAddress} from '../services/http-address';






@Injectable()
export class CourseDataService {



  constructor(public http:Http) {

    //console.log("courseDataService connected..");
    //console.log(HttpAddress.getCourseDataAll);
  }

  /*Tüm Kursları getirir */
  getCourseData(){
    return this.http.get(HttpAddress.getCourseDataAll.toString())
      .map(res=>res.json());
  }

  /*Kusrlara ait öğrencileri getirir  */
  getCourseStudents(id:number){
    return this.http.get(HttpAddress.getCourseStudents.toString()+id)
      .map(res=>res.json());
  }

  postCourseStudentsHours(item:Array<any>){
    return this.http.post(HttpAddress.postCourseStudentsHours.toString(),item)
      .map(res=>res.json());
  }  

}
