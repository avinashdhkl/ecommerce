import { Injectable } from "@angular/core";
import { environment } from './../../../../environments/environment';
// import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from "src/interface/Iuser";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl

    constructor(private http:HttpClient) { }
    // authUser(user: any){
    //     let userArray = [];
    //     if (localStorage.getItem('Users')){
    //         userArray = JSON.parse(localStorage.getItem('Users') || "");
    //     }
    //     return userArray.find(((p: { username: any; password: any }) => p.username === user.username && p.password === user.password) );

    // }

    authUser(user:IUserLogin){
      return this.http.post(this.baseUrl+'/UserAccount/login',user)

    }


}
