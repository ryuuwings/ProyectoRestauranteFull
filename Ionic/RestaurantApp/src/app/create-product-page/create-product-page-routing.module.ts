import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProductPagePage } from './create-product-page.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProductPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProductPagePageRoutingModule {}
