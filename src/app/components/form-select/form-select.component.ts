import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  @Input() menu: any;
  @Input() arr: number;
  @Input() index: number;  
  @Input() innerIndex: number;
  @Output() addAnswer: EventEmitter<any> = new EventEmitter();
  origin_title: string = "";
  no: number = -1;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.origin_title = (this.menu.title).replace(/<\/?[^>]+(>|$)/g, "");
    this.menu.title = this.sanitizer.bypassSecurityTrustHtml(this.menu.title);
    
    this.addAnswer.next({formItemNo: this.menu.formItemNo, item: this.getData(), arr: this.arr, title: this.origin_title, type: this.menu.type, index: this.index, innerIndex: this.innerIndex});
  }

  getData() {
    if(this.no == -1)
      return {};
    return {form_item_no: this.menu.formItemNo, no: this.no};
  }

  changeItemNo(val) {
    this.no = val;
    this.addAnswer.next({formItemNo: this.menu.formItemNo, item: this.getData(), arr: this.arr, title: this.origin_title, type: this.menu.type, index: this.index, innerIndex: this.innerIndex});
  }
}
