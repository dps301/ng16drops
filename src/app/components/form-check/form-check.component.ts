import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-check',
  templateUrl: './form-check.component.html',
  styleUrls: ['./form-check.component.scss']
})
export class FormCheckComponent implements OnInit {
  @Input() menu: any;
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
  }

  getData() {
    this.addSelectedValue();
    
    if(this.selectedItems.length == 0)
      return false;
    return this.selectedItems;
  }
}
