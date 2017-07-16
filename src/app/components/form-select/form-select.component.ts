import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  @Input() menu: any;
  @Input() arr: number;
  @Output() addAnswer: EventEmitter<any> = new EventEmitter();

  no: number = -1;

  constructor() { }

  ngOnInit() {
    this.addAnswer.next({index: this.menu.formItemNo, item: this.getData(), arr: this.arr, title: this.menu.title});
  }

  getData() {
    if(this.no == -1)
      return {};
    return {form_item_no: this.menu.formItemNo, no: this.no};
  }

  changeItemNo(val) {
    this.no = val;
    this.addAnswer.next({index: this.menu.formItemNo, item: this.getData(), arr: this.arr, title: this.menu.title});
  }
}
