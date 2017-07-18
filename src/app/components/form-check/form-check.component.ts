import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-check',
  templateUrl: './form-check.component.html',
  styleUrls: ['./form-check.component.scss']
})
export class FormCheckComponent implements OnInit {
  @Input() menu: any;
  @Input() arr: number;
  @Input() limit: number;
  @Output() addAnswer: EventEmitter<any> = new EventEmitter();

  selectedItems: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
    if(this.limit == 0) {
      this.limit = 9999;
    }
    else {
      if(!this.menu.descript)
        this.menu.descript = "";
      this.menu.descript += "(최대"+this.limit+"개)";
    }
    this.addAnswer.next({index: this.menu.formItemNo, item: this.getData(), arr: this.arr, title: this.menu.title});
  }

  addSelectedValue(item) {
    item.checked = (item.checked == 1? 0: 1);

    if(this.selectedItems.length == this.limit && item.checked == 1) {
      item.checked = 0;
      return ;
    }

    this.selectedItems = [];

    for(var i = 0; i < this.menu.items.length; i++) {
      if(this.menu.items[i].checked == true) {
        this.selectedItems.push({form_item_no: this.menu.formItemNo, no: this.menu.items[i].no})
      }
    }

    this.addAnswer.next({index: this.menu.formItemNo, item: this.getData(), arr: this.arr, title: this.menu.title});
  }

  getData() {
    if(this.selectedItems.length == 0) {
      return {};
    }
    return this.selectedItems;
  }
}
