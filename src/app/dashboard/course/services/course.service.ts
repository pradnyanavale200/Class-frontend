import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseApi = 'http://localhost:3000/course/';
  constructor(
    private http: HttpService
  ) {   }

  courseCreate(data){
    return this.http.post(this.courseApi, data);
  }

  courseUpdate(data){
    return this.http.put(this.courseApi, data);
  }

  getCourse(data){
    return this.http.get(this.courseApi + data);
  }

  deleteCourse(data){
    console.log(data); 
    return this.http.delete(this.courseApi + data);
    
  }
  // createCourse(data) {
  //   return this.http.post(this.courseApi, data);
  // }
}
