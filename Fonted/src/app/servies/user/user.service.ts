import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from './../../models/user/userModel';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    // addUser(user: userModel){

    //     let users = [{}];
    //     if (localStorage.getItem('Users')){
    //         users = JSON.parse(localStorage.getItem('Users') || "");
    //         users = [user, ...users];

    //     }
    //     else{
    //         users = [user];
    //     }
    //     localStorage.setItem('Users', JSON.stringify(users) );
    // }

    addUsers(user:userModel){
      return this.http.post(this.baseUrl+"/UserAccount/register",user)

    }

    // UserRegistration():Observable<string[]>
    // {
    //   return this.http.get<string[]>('http://localhost:5000/api/user/register')
    // }




}
