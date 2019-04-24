import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: any;
  constructor( private router: Router) { }
  ngOnInit() {
    this.isLogin = localStorage.getItem('usertoken') ? true : false;
  }
  logout(){
    localStorage.clear();
    window.location.reload();
    //this.router.relo
  }
}
