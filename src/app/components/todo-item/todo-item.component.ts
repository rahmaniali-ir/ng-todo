import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = { id: 0, title: '', completed: false }
  @Output() onDelete = new EventEmitter()
  @Output() onToggle = new EventEmitter()

  constructor() {}

  get name(): string {
    return `task-${this.todo.id}`
  }

  deleteTask(): void {
    this.onDelete.emit(this.todo.id)
  }

  changed(e: any): void {
    this.todo.completed = e.target.checked

    this.onToggle.emit({
      id: this.todo.id,
      checked: this.todo.completed,
    })
  }

  ngOnInit(): void {}
}
