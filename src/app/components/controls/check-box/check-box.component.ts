import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  HostBinding,
} from '@angular/core'

@Component({
  selector: 'check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.sass'],
})
export class CheckBoxComponent implements OnInit {
  @Input() value: boolean = false
  @Output() valueChange = new EventEmitter<boolean>()

  ngOnInit(): void {}

  toggle(): void {
    this.valueChange.emit(!this.value)
  }

  @HostListener('click') onClick(): void {
    this.toggle()
  }

  @HostBinding('attr.checked') get checked(): any {
    return this.value ? true : null
  }
}
