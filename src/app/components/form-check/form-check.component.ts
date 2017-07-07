import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-check',
  templateUrl: './form-check.component.html',
  styleUrls: ['./form-check.component.scss']
})
export class FormCheckComponent implements OnInit {
  @Input() menu: any;
  @Input() id: string;

  constructor() { 
  }

  ngOnInit() {
  }
}
