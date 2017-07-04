import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  title: string = "이름";
  sub: string = "";

  constructor() { }

  ngOnInit() {
  }

}
