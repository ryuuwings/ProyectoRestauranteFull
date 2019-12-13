import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProduct(){
    this.router.navigate(['/produc-page']);
  }
  goToAddProduct(){
    this.router.navigate(['/create-product-page']);
  }

  goToMain(){
    this.router.navigate(['/main-page']);
  }
}
