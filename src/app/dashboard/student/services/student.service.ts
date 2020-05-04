import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentApi = `${environment.api}/student`;

  constructor(private httpService: HttpService) {}

  getStudents(): Observable<object> {
    return this.httpService.get(`${this.studentApi}/studentDisplay`);
  }

  createStudent(student): Observable<object> {
    return this.httpService.post(
      `${this.studentApi}/studentRegistration`,
      student
    );
  }

  deleteStudent(id): Observable<object> {
    return this.httpService.delete(`${this.studentApi}/studentDelete/${id}`);
  }

  getStudent(data): Observable<object> {
    return this.httpService.get(`${this.studentApi}/studentSearch/${data}`);
  }

  updateStudent(data): Observable<object> {
    return this.httpService.put(`${this.studentApi}/studentUpdate`, data);
  }
}
