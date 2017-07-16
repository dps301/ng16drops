import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-check',
  templateUrl: './form-check.component.html',
  styleUrls: ['./form-check.component.scss']
})
export class FormCheckComponent implements OnInit {
  @Input() menu: any;
  @Input() arr: number;
  @Output() addAnswer: EventEmitter<any> = new EventEmitter();

  selectedItems: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
  }

  addSelectedValue() {
    this.selectedItems = [];

    for(var i = 0; i < this.menu.items.length; i++) {
      if(this.menu.items[i].checked == true) {
        this.selectedItems.push({form_item_no: this.menu.formItemNo, no: this.menu.items[i].no})
      }
    }

    this.addAnswer.next({index: this.menu.formItemNo, item: this.getData(), arr: this.arr, title: this.menu.title});
  }

  getData() {
    if(this.selectedItems.length == 0)
      return null;
    return this.selectedItems;
  }
}
