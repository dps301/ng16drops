import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { NguiScrollableDirective } from '@ngui/scrollable';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  items: Array<string> = [];
  nowIdx: number = 1;
  objIdx: number = 14;
  total: number = 45;
  id: string = 's1';

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('/items')
    .subscribe(
      data => {
        console.log(data.json());
        this.items = data.json();
      }
    );
  }

  scrollTo(selector, parentSelector, horizontal) {
    NguiScrollableDirective.scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      0               // distance from top or left
    );
  }
}
