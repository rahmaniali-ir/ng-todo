import { Component, OnInit } from '@angular/core'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Task one',
        completed: false,
      },
      {
        id: 2,
        title: 'Task two',
        completed: true,
      },
      {
        id: 3,
        title: 'Task three',
        completed: false,
      },
    ]
  }

  get completedCount(): number {
    return this.todos.reduce(
      (count, todo) => count + (todo.completed ? 1 : 0),
      0
    )
  }

  private getNextId(): number {
    let id = 1
    while (this.todos.some((todo) => todo.id === id)) id++
    return id
  }

  private getTodoIndexById(id: number) {
    return this.todos.findIndex((todo) => todo.id === id)
  }

  onAdd(title: string): void {
    this.todos.push({
      id: this.getNextId(),
      title,
      completed: false,
    })
  }

  deleteTask(id: number): void {
    this.todos.splice(this.getTodoIndexById(id), 1)
  }
}