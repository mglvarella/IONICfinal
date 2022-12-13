import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesfilmePageRoutingModule } from './detalhesfilme-routing.module';

import { DetalhesfilmePage } from './detalhesfilme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesfilmePageRoutingModule
  ],
  declarations: [DetalhesfilmePage]
})
export class DetalhesfilmePageModule {}
