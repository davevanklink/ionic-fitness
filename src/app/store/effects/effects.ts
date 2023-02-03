import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as actions from '../actions/actions'
import { CategoryService } from 'src/app/services/category.service';

@Injectable()
export class DataEffects {
  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadCategories),
    switchMap(_action => this.catService.getAllCategories().pipe(
      map(categories => actions.loadCategoriesSuccess({ categories })),
      catchError(err => of(actions.loadCategoriesFailed()))
    ))
  ))

  constructor(
    private actions$: Actions,
    private catService: CategoryService
  ) { }
}
