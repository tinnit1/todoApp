import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import {setFiltro} from '../../filtro/filtro.actions';
import {borrarCompletados} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filterVarius = 'todos';
  filtros: actions.filterVarius[] = ['todos', 'completados', 'pendientes'];

  pendientes = 0;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // this.store.select('filtro')
    //   .subscribe(filtro => this.filtroActual = filtro);
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: actions.filterVarius) {
    this.store.dispatch(setFiltro({filtro}));
  }

  borrarCompleted() {
    this.store.dispatch(borrarCompletados());
  }
}
