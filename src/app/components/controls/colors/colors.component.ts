import { Component, OnInit } from '@angular/core'
import { colors } from '../../../models/Colors'

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.sass'],
})
export class ColorsComponent implements OnInit {
  colors: Array<string> = colors
  selected: string = this.getLastColor()

  ngOnInit(): void {
    this.select()
  }

  getLastColor(): string {
    const local = window.localStorage.getItem('--primary')
    return local ? local : this.colors[0]
  }

  select(color: string = this.selected): void {
    document.documentElement.style.setProperty('--primary', color)
    this.selected = color
    window.localStorage.setItem('--primary', color)
  }
}
