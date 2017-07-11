import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  items: Array<any> = [];
  user: Array<any> = [];
  now: number = 0;
  total: number = 0;
  type: number = 0;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('/items')
    .subscribe(
      data => {
        console.log(data.json());
        this.user = data.json().user;
        this.items = data.json().items;
        this.total = this.items.length;
      }
    );
  }

  move(val) {
    if(val == '+' && this.now < this.total)
      this.now++;
    else if(val == '-' && this.now > 0)
      this.now--;
  }

  rNumber(val: number) {
    return Number(val);
  }
}
