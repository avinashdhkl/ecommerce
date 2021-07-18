import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-Navbar',
    // templateUrl: './Navbar.component.html',
    templateUrl: './NavBar.html',
    styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
    LoggedInUser!: string ;

    constructor() { }

    ngOnInit() {
    }
    userLogin(){
        this.LoggedInUser = localStorage.getItem('username') || "";
        return this.LoggedInUser;
    }
    logout(){
        return localStorage.removeItem('token'&&'username');
    }

}
