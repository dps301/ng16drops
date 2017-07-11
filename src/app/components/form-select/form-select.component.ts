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
  @Output() typeChange: EventEmitter<number> = new EventEmitter<number>();

  no: number = -1;

  constructor() { }

  ngOnInit() {
  }

  getData() {
    if(this.no == -1)
      return false;
    return {form_item_no: this.menu.formItemNo, no: this.no};
  }

  changeItemNo(val) {
    if(this.trigger == 1 && this.no == 136)
      this.type = 1;
    else if(this.trigger == 1 && this.no != 136)
      this.type = 0;
    this.typeChange.emit(this.type);

    this.no = val;
  }
}
