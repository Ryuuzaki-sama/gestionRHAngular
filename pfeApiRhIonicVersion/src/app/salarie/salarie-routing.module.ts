import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalariePage } from './salarie.page';

const routes: Routes = [
  {
    path: '',
    component: SalariePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalariePageRoutingModule {}
