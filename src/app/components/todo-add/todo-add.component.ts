import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass'],
})
export class TodoAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter<string>()
  text: string = ''

  ngOnInit(): void {}

  get isEmpty(): boolean {
    return this.text.length === 0
  }

  addTask(): void {
    this.onAdd.emit(this.text)
    this.text = ''
  }

  inputChange(e: any): void {
    this.text = e.target.value
  }

  onEnter(e: any): void {
    if (e.key === 'Enter') this.addTask()
  }
}
