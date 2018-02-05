import { Component, OnInit, Input } from '@angular/core';
// import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'mm-icon',
  template:  `
  <svg class="svg-icon" version="1.1">
    <use [attr.xlink:href]="'#'+name"></use>
  </svg>
  `
})
export class IconComponent implements OnInit {
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
