import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../../services/http.service';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  items: Array<any> = [];
  showedItems: Array<any> = [];
  userInfo: any = {};
  answers: any = {};
  user: Array<any> = [];
  now: number = 0;
  total: number = 0;
  itemsTotal: number = 0;
  userTotal: number = 0;
  type: number = 0;

  constructor(private http: HttpService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.http.get('/items')
    .subscribe(
      data => {
        console.log(data.json());
        this.total = data.json().total;
        this.itemsTotal = data.json().itemsTotal;
        this.userTotal = data.json().userTotal;
        
        this.user = data.json().user;
        this.items = data.json().items;
        this.showedItems = this.items.map(x => Object.assign({}, x));
        this.showedItems.splice(2, 1);
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

  addAnswer(value) {
    if(value.arr == 'user') {
      this.userInfo[value.index] = value.item;
      console.log(this.userInfo);
    }
    else {
      this.answers[value.index] = value.item;
      console.log(this.answers);
    }
  }

  changeType(value) {
    this.type = value;

    if(this.type == 1) {
      this.showedItems[1] = this.items[2];
    }
    else {
      this.showedItems[1] = this.items[1];
    }
  }

  submit() {
    
  }
}
