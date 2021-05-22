import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodoListComponent } from './components/todo/todo-list/todo-list.component'
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component'
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component'
import { TodoHeaderComponent } from './components/todo/todo-header/todo-header.component'
import { TodoSearchComponent } from './components/todo/todo-search/todo-search.component'
import { CheckBoxComponent } from './components/controls/check-box/check-box.component'
import { ColorsComponent } from './components/controls/colors/colors.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent,
    TodoHeaderComponent,
    TodoSearchComponent,
    CheckBoxComponent,
    ColorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
