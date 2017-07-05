import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  titles: Array<string> = ["기본정보", "유수분관리", "민감관리", "손상관리", "피부결관리"];
  nowIdx: number = 1;
  objIdx: number = 14;
  total: number = 45;

  constructor() { }

  ngOnInit() {
  }

}
