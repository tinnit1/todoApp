import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {todoAll} from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado = false;

  constructor( private state: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  toggleAll() {
    this.completado = !this.completado;
    this.state.dispatch(todoAll({estado: this.completado}));
  }
}
