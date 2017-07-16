import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  @Input() menu: any;
  @Input() type: number;
  @Input() trigger: number;
  @Input() arr: number;
  @Output() changeType: EventEmitter<any> = new EventEmitter();
  @Output() addAnswer: EventEmitter<any> = new EventEmitter();

  no: number = -1;

  constructor() { }

  ngOnInit() {
  }

  getData() {
    if(this.no == -1)
      return null;
    return {form_item_no: this.menu.formItemNo, no: this.no};
  }

  changeItemNo(val) {
    if(this.trigger == 1 && this.no == 136) {
      this.type = 1;
      this.changeType.next(this.type);
    }
    else if(this.trigger == 1 && this.no != 136) {
      this.type = 0;
      this.changeType.next(this.type);
    }

    this.no = val;
        
    this.addAnswer.next({index: this.menu.formItemNo, item: this.getData(), arr: this.arr, title: this.menu.title});
  }
}
