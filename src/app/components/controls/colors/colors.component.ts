import { Component, OnInit } from '@angular/core'
import { colors } from '../../../models/Colors'

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.sass'],
})
export class ColorsComponent implements OnInit {
  colors: Array<string> = colors
  selected: string = this.colors[0]

  ngOnInit(): void {}

  select(color: string): void {
    document.documentElement.style.setProperty('--primary', color)
    this.selected = color
  }
}
