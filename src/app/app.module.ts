import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';

//NgRx
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {TodoModule} from './todos/todo.module';
import {FooterComponent} from './footer/footer.component';
import {todoReducer} from './todos/todo.reducer';
import {environment} from '../environments/environment';
import {appReducer} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
