import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProductPagePageRoutingModule } from './create-product-page-routing.module';

import { CreateProductPagePage } from './create-product-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProductPagePageRoutingModule
  ],
  declarations: [CreateProductPagePage]
})
export class CreateProductPagePageModule {}
