import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  title: string = "하루에 세안하는 횟수는?";
  descript: string = "";
  selectedIdx: number = -1;
  formData: Array<any> = [{content: '3회 이상'}, {content: '2회'}, {content: '1회 이하'}];

  constructor() { }

  ngOnInit() {
  }

}
