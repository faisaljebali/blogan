import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  formregister : FormGroup;
  submitted = false;
  emailRepeat = false;
  constructor( private fb:FormBuilder,private router: Router,private apiuser: UserService) {

   }

  ngOnInit() {
    this.formregister = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.formregister.controls; }


  registerForm(){
    this.submitted = true;
    if(this.formregister.invalid){
      return;
    }
    //console.log(this.formregister);
    this.apiuser.userRegister(this.formregister.value).subscribe(res =>{
     // console.log('register respone ==>'+ res.statuts);
      if(res.statuts === '400'){
        this.emailRepeat = true;
      }
      //this.router.navigateByUrl('/');
    });
  }
}
