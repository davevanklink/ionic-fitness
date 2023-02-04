import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap, withLatestFrom, filter } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { RootState } from '../../store';
import { select, Store } from '@ngrx/store';
import * as actions from '../actions/actions'
import * as selectors from '../selectors/selectors';
import { ExcersizeService } from 'src/app/services/excersize.service';


@Injectable()
export class DataEffects {
  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadCategories),
    switchMap(_action => this.catService.getAllCategories().pipe(
      map(categories => actions.loadCategoriesSuccess({ categories })),
      catchError(err => of(actions.loadCategoriesFailed()))
    ))
  ));

  loadExcersizes$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadExcersizes),
    withLatestFrom(this.store.pipe(select(selectors.getSelectedCategory))),
    switchMap(([_action, selectedCategory]) => {
      if (!selectedCategory) {
        return EMPTY;
      }
      return this.excersizeService.getAllExcersizesByCategory(selectedCategory.id).pipe(
        map(excersizes => actions.loadExcersizesSuccess({ excersizes })),
        catchError(err => of(actions.loadExcersizesFailed()))
      )
    })
  ))

  constructor(
    private readonly actions$: Actions,
    private readonly catService: CategoryService,
    private readonly excersizeService: ExcersizeService,
    private readonly store: Store<RootState>
    
  ) { }
}
