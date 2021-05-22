import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass'],
})
export class TodoAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter<string>()
  @ViewChild('inputBox') inputBox: any
  text: string = ''

  ngOnInit(): void {}

  get value(): string {
    return this.text.trim()
  }

  get isEmpty(): boolean {
    return this.value.length === 0
  }

  addTask(): void {
    if (this.isEmpty) return

    this.onAdd.emit(this.value)
    this.text = ''
    this.inputBox.nativeElement.focus()
  }

  inputChange(e: any): void {
    this.text = e.target.value
  }

  onEnter(e: any): void {
    if (e.key === 'Enter') this.addTask()
  }
}
