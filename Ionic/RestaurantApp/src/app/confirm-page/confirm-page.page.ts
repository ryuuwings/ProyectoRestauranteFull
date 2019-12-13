import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { cliente } from '../models/clientes';
import { factura } from '../models/factura';

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
      {type: 'required', message: 'surname1 is required'},
      {type: 'pattern', message: 'Please enter a valid email addres'}
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
    fechafactura: ['', [Validators.required, Validators.pattern("([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")]],
    mesa: this.FormBuilder.group({
      idmesa: ['', [Validators.required]]
    }),
    camarero: this.FormBuilder.group({
      idcamarero: ['', [Validators.required]]
    })
  })

  constructor(private FormBuilder: FormBuilder, private router: Router, private api: ServerService) { }

  ngOnInit() {
  }
  private newClient;
  private newFactura;

  public submit(){
    
    let postData1={
      "nombre": this.confirmForm.get("nombre").value,
      "apellido1": this.confirmForm.get("apellido1").value,
      "apellido2": this.confirmForm.get("apellido2").value
    };
      this.api.postClient(postData1).subscribe((res:any) =>{
        this.newClient = res.data;
        let postData2={
          "clienteidcliente": this.newClient.idcliente,
          "mesaidmesa": this.confirmForm.get("mesa.idmesa").value,
          "fechafactura":this.confirmForm.get("fechafactura").value,
          "camareroidcamarero":this.confirmForm.get("camarero.idcamarero").value
        }
        this.api.postBill(postData2).subscribe((res:any)=>{
          this.newFactura = res.data;
          this.router.navigate(["/main-page"]);
          localStorage.setItem("idFactura", this.newFactura.idfactura);
          console.log(localStorage.getItem("idFactura"));
        });
        
      });
  }  
}
