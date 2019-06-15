import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiurl:string = 'http://localhost:3800/api';
  constructor(private http: HttpClient) { }
  addarticle(data){
    return this.http.post<any>(`${this.apiurl}/post/add`,data);
  }
  getposts(){
    return this.http.get(`${this.apiurl}/post/all`);
  }
}
