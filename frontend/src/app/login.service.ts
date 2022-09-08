import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginobj: object = {};
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) {}
  

  login(loginobj: object):Observable<{}>{
    this.loginobj = loginobj;
    console.log("loginobj in services = ", this.loginobj);
    return this.http.post('http://localhost:3000/login', this.loginobj, { headers: this.headers})

}
}