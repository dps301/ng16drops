import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit {
  titles: Array<string> = ["기본정보", "유수분관리", "민감관리", "손상관리", "피부결관리"];
  nowIdx: number = 1;
  objIdx: number = 14;
  total: number = 45;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    $(window).on("load", () => {
      $("a[rel='m_PageScroll2id']").mPageScroll2id({
        layout: "horizontal",
        forceSingleHighlight: true,
        offset:"#id"
      });
    });
  }
}
