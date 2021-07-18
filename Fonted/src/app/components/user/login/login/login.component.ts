import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from './../../../../servies/alertify/alertify.service';
import { AuthService } from './../../../../servies/user/auth/auth.service';

import { IUserLogin } from 'src/interface/Iuser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// user!:IUserLogin;
    constructor(private alertify: AlertifyService, private userLogin: AuthService, private router: Router) { }

    ngOnInit() {
    }
    onLogin(loginForm: NgForm){
        console.log(loginForm.value);
      this.userLogin.authUser(loginForm.value).subscribe(
        (response:any)=>{
          console.log('user',response)
          const user = response;
          console.log('token',user.token)
          localStorage.setItem('token', user.token);
          localStorage.setItem('username',user.username);
          this.alertify.success('Successfully login');
            this.router.navigate(['/']);
            console.log('Successful');
        }
        // ,error=>{
        //   console.log('err',error);
        //   this.alertify.error(error.error);
        // }
      )
        // if (token){
        //     localStorage.setItem('token', token.username);
        //     this.alertify.success('Successfully login');
        //     this.router.navigate(['/']);
        //     console.log('Successful');
        // }
        // else{
        //     this.alertify.error('username or password Invalid');
        //     console.log('error');
        // }

    }


}
