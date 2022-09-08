import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  Email: String = '';
  Password: String = '';
  result!: object;
  loginobj!: object;
  i!: number;
  login() {
    this.loginobj = {
      Email: this.Email,
      Password: this.Password
    }
    this._loginService.login(this.loginobj).subscribe((data) => {
      if (data) {
        console.log("data in component",data);
        
      } else {


      }
    }, (err) => {
      this.result = err;
      console.log(err)

    });
  }

}
