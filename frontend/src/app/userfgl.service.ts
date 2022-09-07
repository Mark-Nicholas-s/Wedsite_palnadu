import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserfglService {
  private userfglobj: object = {};
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) {}
  

  postFglForm(userfglobj: object):Observable<{}>{
    this.userfglobj = userfglobj;
    console.log("userfglobj in services = ", this.userfglobj);
    return this.http.post('http://localhost:3000/fglform', this.userfglobj, { headers: this.headers})
  }
}
