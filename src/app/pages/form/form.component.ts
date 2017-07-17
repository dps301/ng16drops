import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  items: Array<any> = [];
  userInfo: any = {};
  answers: any = {};
  user: Array<any> = [];
  now: number = 0;
  total: number = 0;
  itemsTotal: number = 0;
  userTotal: number = 0;

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
      }
    );
  }

  move(val) {
    if((this.now == 0 && val == '-') || (this.now == this.items.length && val == '+'))
      return ;
    if(val == '+')
      this.now++;
    else if(val == '-')
      this.now--;
  }

  addAnswer(value) {
    if(value.arr == 'user') {
      this.userInfo[value.index] = value.item;
      this.userInfo[value.index].title = value.title;
    }
    else {
      this.answers[value.index] = value.item;
      this.answers[value.index].title = value.title;
    }
  }

  submit() {
    var userArr = [];
    for (var prop in this.userInfo) {
      userArr.push(this.userInfo[prop]);
    }

    var itemsArr = [];
    for (var prop in this.answers) {
      itemsArr.push(this.answers[prop]);
    }

    console.log({'user': userArr, 'items': itemsArr});
    
    for(var i = 0; i < userArr.length; i++) {
      if(!userArr[i].form_item_no) {
        alert(userArr[i].title + ' 항목을 확인해주세요.');
        return ;
      }
    }

    for(var i = 0; i < itemsArr.length; i++) {
      if(!itemsArr[i].form_item_no) {
        alert(itemsArr[i].title + ' 항목을 확인해주세요.');
        return ;
      }
    }

    this.http.post('/items', {'user': userArr, 'items': itemsArr})
    .subscribe(
      data => {
        
      }
    );
  }
}
