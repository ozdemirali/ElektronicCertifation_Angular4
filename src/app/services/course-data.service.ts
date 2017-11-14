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

  getCourseData(){
    return this.http.get(HttpAddress.getCourseDataAll.toString())
      .map(res=>res.json());
  }

}
