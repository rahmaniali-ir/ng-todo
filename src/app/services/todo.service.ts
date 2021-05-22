import { Injectable } from '@angular/core'
import { Todo } from '../models/Todo'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos'

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + '?_limit=5')
  }

  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(this.todosUrl + '/' + todo.id, todo, headerOptions)
  }

  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(this.todosUrl + '/' + todo.id, headerOptions)
  }
}

// [
//   {
//     id: 1,
//     title: 'Task one',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'Task two',
//     completed: true,
//   },
//   {
//     id: 3,
//     title: 'Task three',
//     completed: false,
//   },
// ]
