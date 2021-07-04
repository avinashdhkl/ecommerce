import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from './../../../../servies/alertify/alertify.service';
import { AuthService } from './../../../../servies/user/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private alertify:AlertifyService,private userLogin:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(loginForm:NgForm){
    console.log(loginForm.value)
   const token= this.userLogin.authUser(loginForm.value)
   if(token){
     localStorage.setItem('token',token.username);
     this.alertify.success('Successfully login');
     this.router.navigate(['/']);
     console.log('Successful')
   }
   else{
     this.alertify.error('username or password Invalid')
     console.log('error');
   }

  }


}
