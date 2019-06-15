import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  fileUpload: Array<File> = [];
  formadd : FormGroup;
  submitted = false;
  htmlContent:any;
  constructor(private apiuser:UserService,
              private route:Router,
              private fb: FormBuilder,
              private apipost:PostService) { }

  ngOnInit() {
    this.formadd = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required]],
      fileimage: ['', [Validators.required]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.formadd.controls; }

  filechangeEvent(event) {
    this.fileUpload = <Array<File>>event.target.files;
    console.log('fileup', this.fileUpload);
  }
  /*uploadFile() {
    const myFile = new FormData();
    myFile.append('file', this.fileUpload[0]);
    console.log('image', myFile);
    this.apiuser.uploadfile(myFile).subscribe(res => {
      console.log('up component', res);
    });
  }*/
  addarticle(){
    this.submitted = true;
    if(this.formadd.invalid){
      console.log(this.htmlContent);
      return;
    }
    const myFile = new FormData();
    myFile.append('file', this.fileUpload[0]);
    const token = localStorage.getItem('usertoken');
    const userId = jwt_decode(token).data._id;
    this.formadd.value['user'] = userId;
    this.formadd.value['image_post'] = this.fileUpload[0]['name'];
    //console.log(this.fileUpload[0]);
    //console.log(userId);
    //console.log('image', myFile);
    //console.log('post add');
    this.apiuser.uploadfile(myFile).subscribe(res => {
      //console.log('up component', res);
    });
    this.apipost.addarticle(this.formadd.value).subscribe(resp => {
      this.route.navigate(['/']);
    });
  }

}
