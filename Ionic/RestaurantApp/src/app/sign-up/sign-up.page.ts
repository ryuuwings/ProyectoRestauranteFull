import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  get nombre(){
    return this.signUpForm.get('nombre');
  }

  get apellido1(){
    return this.signUpForm.get('apellido1');
  }

  get apellido2(){
    return this.signUpForm.get('apellido2');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  public errorMessages= {
    nombre: [
      {type: 'required', message: 'Name is required'}
    ],
    apellido1: [
      {type: 'required', message: 'surname1 is required'}
    ],
    apellido2: [
      {}
    ],
    email: [
      {type: 'required', message: 'Email is required'},
      {type: 'pattern', message: 'Please enter a valid email addres'}
    ],
    password: [
      {type: 'required', message: 'password is required'}
    ]
  };

  signUpForm = this.FormBuilder.group({
    nombre: ['', [Validators.required]],
    apellido1: ['', [Validators.required]],
    apellido2: ['',],
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._/-]+@[a-zA-Z0-9·-]+.[a-zA-Z]{2,4}$")]],
    password: ['',[Validators.required]]
  })

  constructor(private api: ServerService,private router: Router, private FormBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public submit(){
    let postData ={
      "nombre": this.signUpForm.get("nombre").value,
      "apellido1":this.signUpForm.get("apellido1").value,
      "apellido2":this.signUpForm.get("apellido2").value,
      "email":this.signUpForm.get("email").value,
      "contraseña":this.signUpForm.get("password").value
    };
    this.api.postUser(postData).subscribe();
    this.router.navigate(["home"])
  }  

}
