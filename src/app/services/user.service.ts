import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userRegister(data){
    //console.log('data register', data);
    return this.http.post<any>('https://blogangularo.herokuapp.com/api/user/registre',data)
  }
  userlogin(data){
    return this.http.post<any>('https://blogangularo.herokuapp.com/api/user/login',data);
  }
}
