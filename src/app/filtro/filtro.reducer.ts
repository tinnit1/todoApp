import {createReducer, on} from '@ngrx/store';
import {setFiltro, filterVarius} from './filtro.actions';

export const initialState: filterVarius = 'todos';

const _filtroReducer = createReducer(initialState,
  on(setFiltro, (state, {filtro}) => filtro),
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
