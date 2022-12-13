import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesfilmePage } from './detalhesfilme.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesfilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesfilmePageRoutingModule {}
