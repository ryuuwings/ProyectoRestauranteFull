import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducPagePageRoutingModule } from './produc-page-routing.module';

import { ProducPagePage } from './produc-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducPagePageRoutingModule
  ],
  declarations: [ProducPagePage]
})
export class ProducPagePageModule {}
