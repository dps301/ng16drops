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

  constructor(private http: HttpService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.http.get('/items')
    .subscribe(
      data => {
        console.log(data.json());
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
      this.userInfo[value.index] = Object.assign({}, value.item)
      if(Object.keys(value.item).length === 0)
        this.userInfo[value.index].form_item_no = null;
      else
        this.userInfo[value.index].form_item_no = value.formItemNo;
      this.userInfo[value.index].title = value.title;
      this.userInfo[value.index].type = value.type;
      this.userInfo[value.index].index = value.index;
    }
    else {
      (this.answers[this.now - 1])[value.formItemNo] = Object.assign({}, value.item)
      if(Object.keys(value.item).length === 0)
        (this.answers[this.now - 1])[value.formItemNo].form_item_no = null;
      else
        (this.answers[this.now - 1])[value.formItemNo].form_item_no = value.formItemNo;
      (this.answers[this.now - 1])[value.formItemNo].title = value.title;
      (this.answers[this.now - 1])[value.formItemNo].type = value.type;
      (this.answers[this.now - 1])[value.formItemNo].index = value.index;
    }
    console.log(this.user);
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

    this.http.post('/apply', {'user': userArr, 'items': itemsArr})
    .subscribe(
      data => {
        
      }
    );
  }

  mobileIdx(i) {
    if(i == this.now)
      return true;
    else if(i == this.now - 1 || i == this.now + 1) {
      return true;
    }

    return false;
  }

  next(idx) {
    // this.answers.filter(
    //   (item) => {
    //     if(!item.form_item_no)
    //       alert(item.title + ' 항목을 확인해주세요.');
    //   }
    // );
    this.now = idx + 1;
  }
}
