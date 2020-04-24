import {createAction, props} from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toogle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{ id: number, texto: string }>()
);

export const borrar = createAction(
  '[TODO] Borrar Todo',
  props<{ id: number}>()
);

export const todoAll = createAction(
  '[TODO] completado Todo',
  props<{ estado: boolean}>()
);

export const borrarCompletados = createAction(
  '[TODO] borrarCompletados Todo'
);
