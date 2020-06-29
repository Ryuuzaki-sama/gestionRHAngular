import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalariePageRoutingModule } from './salarie-routing.module';

import { SalariePage } from './salarie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalariePageRoutingModule
  ],
  declarations: [SalariePage]
})
export class SalariePageModule {}
