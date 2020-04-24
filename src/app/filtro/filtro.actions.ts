import {createAction, props} from '@ngrx/store';

export type filterVarius = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
  '[Filtro] Set filtro',
  props<{ filtro: filterVarius }>());
