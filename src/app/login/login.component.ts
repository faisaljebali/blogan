import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formlogin: FormGroup;
  submitted = false;
  items;
  messageError: string = '';
  constructor(private router: Router, private http: HttpClient,
    private fb: FormBuilder, private apiUser: UserService,
    private cookieService: CookieService) {
    this.formlogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  get f() { return this.formlogin.controls; }

  loginForm() {
    this.submitted = true;
    if (this.formlogin.invalid) {
      return false;
    } else {
      this.apiUser.userlogin(this.formlogin.value).subscribe((res: any) => {
        this.items = JSON.stringify(res);
        //console.log(this.items);
        if (res.status === '200') {
          localStorage.setItem('usertoken', res.userTokeb);
          localStorage.setItem('response', res.status);
          localStorage.setItem('response', res.iduser);
          //localStorage.setItem('nomUser', res.nom);
          this.cookieService.set( 'nom_user', res.nom_user );
          this.router.navigate(['/dashbord']);
          window.location.reload();
        } else {
          //console.log(res.status);
          this.messageError = 'Email or password is incorrect';
        }
      },
        res => {
          console.log(res);
        }
      );
    }
  }
}
