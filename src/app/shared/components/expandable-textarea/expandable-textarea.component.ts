import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mm-expandable-textarea',
  templateUrl: './expandable-textarea.component.html',
  styleUrls: ['./expandable-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ExpandableTextareaComponent),
      multi: true,
    }
  ]
})
export class ExpandableTextareaComponent implements OnInit, ControlValueAccessor{
  value: string;
  writeValue(value: any): void {
    this.value = value;
  }

  private onChange = (value: string) => { };
  private onTouched = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  change(value) {
    this.onChange(value);
  }

  focus(){
    this.onTouched();
  }
  constructor() { }

  ngOnInit() {
  }

}
