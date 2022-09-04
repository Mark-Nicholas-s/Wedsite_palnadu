import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private id: string = '';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }

  getAllStudents() {
    return this.http.get(this.baseUrl + '/Students', { headers: this.headers});
  }

  getStudent(_id: any) {
    return this.http.get(this.baseUrl + `/Students/${_id}`, { headers: this.headers});
  }
}
