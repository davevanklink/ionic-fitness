import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({ state: reducer })
  ]
})
export class AppStoreModule { }
