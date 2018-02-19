import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ICreateList } from 'app/shared/interfaces/icreate-list';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mm-add-to-list-form',
  templateUrl: './add-to-list-form.component.html',
  styleUrls: ['./add-to-list-form.component.scss']
})
export class AddToListFormComponent implements OnInit {
  @Output() formClosed: EventEmitter<void> = new EventEmitter();
  @Output() formSubmitted: EventEmitter<ICreateList> = new EventEmitter();
  @Input() movies: Array<any>;
  addListForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.addListForm = this._fb.group({
      name: ['', Validators.required],
      description: [],
      language: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  createList(){
    if (this.addListForm.value.invalid){
      return;
    }
    this.formSubmitted.emit(this.addListForm.value);
  }
  closeForm(){
    this.formClosed.emit();
  }

}
