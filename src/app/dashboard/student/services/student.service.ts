import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentApi = `${environment.api}/student`;

  constructor(
    private httpService: HttpService
  ) { }

  getStudents(): Observable<object> {
    return this.httpService.get(`${this.studentApi}/studentDisplay`);
  }

  createStudents(student): Observable<object> {
    return this.httpService.post(`${this.studentApi}/studentRegistration`, student);
  }
}
