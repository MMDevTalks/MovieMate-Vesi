import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'mm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() collectables: Array<any>;
  @Input() isCollecting: boolean;
  @Output() collectionCompleted: EventEmitter<Array<any>> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  completeSelection() {
    this.collectionCompleted.emit(this.collectables);
  }
  
}
