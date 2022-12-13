import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CepPageRoutingModule } from './cep-routing.module';

import { CepPage } from './cep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CepPageRoutingModule
  ],
  declarations: [CepPage]
})
export class CepPageModule {}
