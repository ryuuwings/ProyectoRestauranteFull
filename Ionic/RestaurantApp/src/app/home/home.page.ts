import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  get email(){
    return this.registrationForm.get('email');
  }
  get contraseña(){
    return this.registrationForm.get('password');
  }

  public errorMessages = {
    email: [
      {type: 'required', message: 'email is required'},
      {type: 'pattern', message: 'Please enter a valid email addres'}
    ],
    contraseña: [
      {type: 'required', message: 'password is required'}
    ]
  };

  registrationForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._/-]+@[a-zA-Z0-9·-]+.[a-zA-Z]{2,4}$")]],
    password: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder, private api: ServerService ,private router: Router) {}

  ngOnInit(){

  }
  
  goToMain(){
    this.api.getUsers().subscribe((res)=>{
      var result = JSON.parse(JSON.stringify(res))
      for (let i=0; i<result.data.length; i++){
        if((result.data[i].email == this.registrationForm.get('email').value) &&
        (result.data[i].contraseña == this.registrationForm.get('password').value)){
          this.router.navigate(["/confirm-page"]);
        }
      }
    });
  }
  goToSign(){
    this.router.navigate(["/sign-up"])
  }
}

