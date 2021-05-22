import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
})
export class TodoItemComponent implements OnInit {
  @Input() id: number = 0
  @Input() title: string = ''
  @Input() checked: boolean = false
  @Output() onDelete = new EventEmitter()
  @Output() onToggle = new EventEmitter()

  constructor() {}

  get name(): string {
    return `task-${this.id}`
  }

  deleteTask(): void {
    this.onDelete.emit(this.id)
  }

  changed(e: any): void {
    this.checked = e.target.checked

    this.onToggle.emit({
      id: this.id,
      checked: this.checked,
    })
  }

  ngOnInit(): void {}
}
