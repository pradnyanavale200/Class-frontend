import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authApi = `${environment.api}/user`;

  constructor(
    private httpService: HttpService
  ) { }

  login(data) {
    return this.httpService.post(`${this.authApi}/login`, data);
  }

  findIdByEmail(data) {
    return this.httpService.post(`${this.authApi}/findId`, data);
  }

  register(data) {
    return this.httpService.post(`${this.authApi}/register`, data);
  }
}
