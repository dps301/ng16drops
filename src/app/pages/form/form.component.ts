import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { NguiScrollableDirective } from '@ngui/scrollable';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  items: Array<any> = [];
  objIdx: number = 14;
  total: number = 0;
  id: string = 's1';
  type: number = 0;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('/items')
    .subscribe(
      data => {
        console.log(data.json());
        this.items = data.json();

        this.getTotal();
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

  getTotal() {
    var total = 0;

    for(var i = 0; i < this.items.length; i++) {
      this.total += this.items[i].items.length;
    }
  }
}
