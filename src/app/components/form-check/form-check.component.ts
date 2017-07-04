import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-check',
  templateUrl: './form-check.component.html',
  styleUrls: ['./form-check.component.scss']
})
export class FormCheckComponent implements OnInit {
  title: string = "현재 쓰고있는 세안제를 목록 중에서 골라주세요";
  descript: string = "중복 선택 가능합니다";
  formData: Array<any> = [{content: '클렌징 폼'}, {content: '클렌징 로션'}, {content: '클렌징 오일'}, {content: '클렌징 젤'}, {content: '비누'}, {content: '없음'}];

  constructor() { 

  }

  ngOnInit() {
  }

}
