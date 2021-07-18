import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    LoggedInUser: string | undefined;

    constructor() { }

    ngOnInit() {
    }

    userLogin(){
      this.LoggedInUser = localStorage.getItem('username') || "";
      return this.LoggedInUser;
    }
}
