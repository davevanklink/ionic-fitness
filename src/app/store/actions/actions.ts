import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/services/category.service';
import { Excersize } from 'src/app/services/excersize.service';

export const testAction = createAction('[Test] test actions', props<{ data: boolean }>());

// Categories
export const loadCategories = createAction('[Category] Load Categories');
export const loadCategoriesSuccess = createAction('[Category] Load Categories Success', props<{ categories: Category[]}>());
export const loadCategoriesFailed = createAction('[Category] Load Categories Failed');
export const selectCategory = createAction('[Category] Select Category', props<{ category: Category }>());
export const resetSelectedCategory = createAction('[Category] Reset Category');

// Excersizes
export const loadExcersizes = createAction('[Excersize] Load Excersizes');
export const loadExcersizesSuccess = createAction('[Excersize] Load Excersizes Success', props<{ excersizes: Excersize[]}>());
export const loadExcersizesFailed = createAction('[Excersize] Load Excersizes Failed');
export const selectExcersize = createAction('[Excersize] Select Excersize', props<{ excersize: Excersize }>());
export const resetSelectedExcersize = createAction('[Excersize] Reset Excersize');

//