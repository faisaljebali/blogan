import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: any;
  NameLogin: any;
  constructor( private router: Router,private cookieService: CookieService ) {
    this.NameLogin = this.cookieService.get('nom_user');
   }
  ngOnInit() {
    this.isLogin = localStorage.getItem('usertoken') ? true : false;
  }
  logout(){
    localStorage.clear();
    window.location.reload();
  }
}
