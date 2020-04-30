import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseApi = 'http://localhost:3000/dashboard/course';
  constructor(
    private http: HttpClient
  ) {   }

  courseUpdate(data){
    return this.http.get(this.courseApi + '/courseUpdate', data);
  }

  getCourseData(data){
    return this.http.post(this.courseApi + '/courseData', data);
  }
}
