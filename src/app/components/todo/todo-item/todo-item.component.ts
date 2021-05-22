import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Todo } from '../../../models/Todo'
import { TodoService } from '../../../services/todo.service'

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = { id: 0, title: '', completed: false }
  @Output() onDelete = new EventEmitter()
  @Output() onToggle = new EventEmitter()
  loading: boolean | null = null

  constructor(private todoService: TodoService) {}

  deleteTask(): void {
    this.onDelete.emit(this.todo.id)
  }

  changed(): void {
    this.loading = true
    this.todoService.toggleCompleted(this.todo).subscribe(() => {
      this.todo.completed = !this.todo.completed
      this.loading = null
    })
  }

  ngOnInit(): void {}
}
