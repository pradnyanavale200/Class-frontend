import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseApi = 'http://localhost:3000/dashboard/course';
  constructor(
    private http: HttpService
  ) {   }

  courseCreate(data){
    return this.http.post(this.courseApi + '/courseCreate', data);
  }

  courseUpdate(data){
    return this.http.put(this.courseApi, data);
  }

  getCourse(){
    return this.http.get(this.courseApi);
  }

  createCourse(data) {
    return this.http.post(this.courseApi, data);
  }
}
