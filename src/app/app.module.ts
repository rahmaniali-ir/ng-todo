import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component'
import { TodoAddComponent } from './components/todo-add/todo-add.component'
import { TodoHeaderComponent } from './components/todo-header/todo-header.component'
import { TodoSearchComponent } from './components/todo-search/todo-search.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoHeaderComponent,
    TodoSearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
