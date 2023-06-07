import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public message : string = '';
  public username : string = '';
  public password : string = '';

  constructor(private http: HttpService,
              private router : Router){}
  login(){
    this.http.login(this.username, this.password)
      .subscribe((resp : any)=>{
        console.log('Successfully logged in');
        this.message=resp.msg;
        this.router.navigate(['food', 'stock-list'],{});
        console.error('username', this.username);
        console.error('password', this.password);
      }, (err : any)=>{
        console.error('Error logging in', err);
        this.message = err.error.msg;
      });
    }
}


