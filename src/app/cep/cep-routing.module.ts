import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CepPage } from './cep.page';

const routes: Routes = [
  {
    path: '',
    component: CepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CepPageRoutingModule {}
