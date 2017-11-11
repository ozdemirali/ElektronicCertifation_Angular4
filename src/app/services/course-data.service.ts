import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class CourseDataService {

  constructor(public http:Http) {

    //console.log("courseDataService connected..");
  }

  getCourseData(){
    return this.http.get('http://127.0.0.1:5000/course')
      .map(res=>res.json());
  }

}
