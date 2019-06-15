import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUrl:string = "http://localhost:3800/api";
  constructor(private http: HttpClient) { }
  userRegister(data){
    //console.log('data register', data);
    return this.http.post<any>(`${this.appUrl}/user/registre`,data)
  }
  userlogin(data){
    return this.http.post<any>(`${this.appUrl}/user/login`,data);
  }
  uploadfile(file) {
    console.log('myfile service', file);
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'form-data');
      return this.http.post(`${this.appUrl}/user/upload/`, file, {headers} );
  }
}
