import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState, reducer } from './reducers/reducer';

export interface RootState {
  reducer: AppState
}

export const reducers: ActionReducerMap<RootState> = {
  reducer
};
export const metaReducers: MetaReducer<RootState>[] = [];