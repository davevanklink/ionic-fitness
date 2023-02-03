import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RootState } from '..';
import { AppState } from '../reducers/reducer';

export const selectFeature = (state: RootState) => state.reducer;

export const selectTest = createSelector(selectFeature, (state: AppState) => state.test);

// Categories
export const isCategoriesLoading = createSelector(selectFeature, (state) => state.categoriesLoading);
export const isCategoriesError = createSelector(selectFeature, (state) => state.categoriesError);
export const getCategories = createSelector(selectFeature, (state) => state.categories);
export const getSelectedCategory = createSelector(selectFeature, (state) => state.selectedCategory);

/** Excersizes */
// export const isExcersizesLoading = createSelector(selectFeature, (state) => state.categoriesLoading);
// export const isExcersizesError = createSelector(selectFeature, (state) => state.categoriesError);
// export const getExcersizes = createSelector(selectFeature, (state) => state.categories);
// export const getSelectedExcersize = createSelector(selectFeature, (state) => state.selectedCategory);