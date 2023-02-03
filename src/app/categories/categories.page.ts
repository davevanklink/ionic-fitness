import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, take, tap } from 'rxjs';
import { CategoryService, Category } from '../services/category.service';
import { AppState } from '../store/reducers/reducer';
import * as actions from '../store/actions/actions';
import * as selectors from '../store/selectors/selectors';
import { RootState } from '../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: Observable<Category[]> | undefined = undefined;

  constructor(
    private readonly store: Store<RootState>,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(actions.loadCategories());
    this.categories = this.store.pipe(select(selectors.getCategories));
  }

  selectCategory(category: Category) {
    this.store.dispatch(actions.selectCategory({ category }));
    this.router.navigate(['../excersize/']);
  }

}
