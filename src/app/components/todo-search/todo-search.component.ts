import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.sass'],
})
export class TodoSearchComponent implements OnInit {
  @Input() value: string = ''
  @Output() valueChange = new EventEmitter<string>()

  ngOnInit(): void {}

  searchChange(e: any): void {
    this.valueChange.emit(e.target.value)
  }
}
