import {createReducer, on} from '@ngrx/store';
import {borrar, borrarCompletados, crear, editar, todoAll, toggle} from './todo.actions';
import {Todo} from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('vencer a thanos'),
  new Todo('loki'),
  new Todo('thor'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(borrarCompletados, (state) => state.filter(todo => !todo.completado)),
  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(todoAll, (state, {estado}) => {
    return state.map(todo => {
      return{
        ...todo,
        completado: estado
      };
    });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
