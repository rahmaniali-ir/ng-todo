import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.sass'],
})
export class TodoHeaderComponent implements OnInit {
  @Input() count: number = 0
  @Input() completed: number = 0

  get allTasksText(): string {
    return `${this.count > 0 ? this.count : 'No'} Task${
      this.count > 1 ? 's' : ''
    }`
  }

  get completedText(): string {
    let completed: string = String(this.completed)
    if (this.count === 0) return ''
    else if (this.completed === 0) completed = 'None'
    else if (this.completed === this.count) completed = 'All'

    return ` / ${completed} Completed!`
  }

  get countText(): string {
    return this.allTasksText + this.completedText
  }

  ngOnInit(): void {}
}
