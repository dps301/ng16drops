import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() menu: any;
  @Input() arr: any;
  @Output() addAnswer: EventEmitter<any> = new EventEmitter();

  inputVal: string = "";

  constructor() { }

  ngOnInit() {
  }

  getData() {
    if(this.inputVal.length < 1)
      return null;
    return {form_item_no: this.menu.formItemNo, answer: this.inputVal};
  }

  inputChange() {
    this.addAnswer.next({index: this.menu.formItemNo, item: this.getData(), arr: this.arr});
  }
}
