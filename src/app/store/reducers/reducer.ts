import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/services/category.service';
import * as actions from '../actions/actions';

export const reducerKey = 'reducer';

export interface AppState {
  test: boolean
  // Categories
  categoriesLoading: boolean;
  categories: Category[];
  categoriesError: boolean;
  selectedCategory?: Category;
  /** Excersizes */
}

export const initialState: AppState = {
  test: false,
  // Categories
  categoriesLoading: false,
  categories: [],
  categoriesError: false,
  selectedCategory: undefined
  /** Excersizes */
};

export const reducer = createReducer(
  initialState,

  on(actions.testAction, (state, { data }) => ({
    ...state,
    test: data
  })),

  /** Categories */
  on(actions.loadCategories, (state) => ({
    ...state,
    categoriesLoading: true,
    categoriesError: false,
  })),
  on(actions.loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categoriesLoading: false,
    categoriesError: false,
    categories
  })),
  on(actions.loadCategoriesFailed, (state) => ({
    ...state,
    categoriesError: true
  })),
  on(actions.selectCategory, (state, { category }) => ({
    ...state,
    selectedCategory: category
  })),
  on(actions.resetSelectedCategory, (state) => ({
    ...state,
    selectedCategory: undefined
  })),

  /** Excersizes */
);
