import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcersizePageRoutingModule } from './excersize-routing.module';

import { ExcersizePage } from './excersize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcersizePageRoutingModule
  ],
  declarations: [ExcersizePage]
})
export class ExcersizePageModule {}
