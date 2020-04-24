import {Todo} from './todos/models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducer';
import {filterVarius} from './filtro/filtro.actions';
import {filtroReducer} from './filtro/filtro.reducer';

export interface AppState {
  todos: Todo[];
  filtro: filterVarius;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
