import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.sass'],
})
export class ColorsComponent implements OnInit {
  colors: Array<string> = ['#1D9A6C', '#0E4D64', '#EB222D', '#EAAB00']
  selected: string = this.colors[0]

  ngOnInit(): void {}

  select(color: string): void {
    document.documentElement.style.setProperty('--primary', color)
    this.selected = color
  }
}
