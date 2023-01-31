import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcersizePage } from './excersize.page';

const routes: Routes = [
  {
    path: '',
    component: ExcersizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcersizePageRoutingModule {}
