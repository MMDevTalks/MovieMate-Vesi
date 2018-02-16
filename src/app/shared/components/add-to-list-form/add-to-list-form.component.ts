import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mm-add-to-list-form',
  templateUrl: './add-to-list-form.component.html',
  styleUrls: ['./add-to-list-form.component.scss']
})
export class AddToListFormComponent implements OnInit {
  @Output() formClosed: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  closeForm(){
    this.closeForm.emit();
  }

}
