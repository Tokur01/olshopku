import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CariprodukPageRoutingModule } from './cariproduk-routing.module';

import { CariprodukPage } from './cariproduk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CariprodukPageRoutingModule
  ],
  declarations: [CariprodukPage]
})
export class CariprodukPageModule {}
