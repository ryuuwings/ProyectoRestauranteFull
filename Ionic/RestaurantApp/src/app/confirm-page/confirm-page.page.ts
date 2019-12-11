import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.page.html',
  styleUrls: ['./confirm-page.page.scss'],
})
export class ConfirmPagePage implements OnInit {

  get nombre(){
    return this.confirmForm.get('nombre');
  }
  get apellido1(){
    return this.confirmForm.get('apellido1');
  }
  get apellido2(){
    return this.confirmForm.get('apellido2');
  }
  get fechafactura(){
    return this.confirmForm.get('fechafactura');
  }

  get idmesa(){
    return this.confirmForm.get('mesa.idmesa');
  }
  get idcamarero(){
    return this.confirmForm.get('camarero.idcamarero');
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
    fechafactura: [
      {type: 'required', message: 'Date is required'}
    ],
    idmesa: [
      {type: 'required', message: 'tableID is required'}
    ],
    idcamarero: [
      {type: 'required', message: 'waiterID is required'}
    ]
  }

  confirmForm = this.FormBuilder.group({
    nombre: ['', [Validators.required]],
    apellido1: ['', [Validators.required]],
    apellido2: ['',],
    fechafactura: ['', [Validators.required]],
    mesa: this.FormBuilder.group({
      idmesa: ['', [Validators.required]]
    }),
    camarero: this.FormBuilder.group({
      idcamarero: ['', [Validators.required]]
    })
  })

  constructor(private FormBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  public submit(){
    console.log(this.confirmForm.value);

  }  
}
