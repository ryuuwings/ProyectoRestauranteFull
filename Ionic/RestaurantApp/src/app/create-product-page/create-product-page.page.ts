import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.page.html',
  styleUrls: ['./create-product-page.page.scss'],
})
export class CreateProductPagePage implements OnInit {
get tamano(){
    return this.createProductForm.get('tamano');
  }
  get nombreplato(){
    return this.createProductForm.get('nombreplato');
  }
  get allergens(){
    return this.createProductForm.get('allergens');
  }
  get descripcion(){
    return this.createProductForm.get('descripcion');
  }

  get infonutricional(){
    return this.createProductForm.get('infonutricional');
  }
  get precio(){
    return this.createProductForm.get('precio');
  }
  get tipo(){
    return this.createProductForm.get('tipo');
  }
  get ruta(){
    return this.createProductForm.get('ruta');
  }

  createProductForm = this.FormBuilder.group({
    tamano: ['', []],
    nombreplato: ['', []],
    allergens: ['', []],
    descripcion: ['', []],
    infonutricional: ['', []],
    precio: ['', []],
    tipo: ['', []],
    ruta: ['', []]
  });

  

  constructor(private api: ServerService,private router: Router, private FormBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
