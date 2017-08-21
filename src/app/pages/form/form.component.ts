import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  items: Array<any> = [];
  userInfo: any = [];
  answers: any = [[], [], [], [], []];
  user: Array<any> = [];
  now: number = 0;

  constructor(private http: HttpService, private cdRef: ChangeDetectorRef, private router: Router) { }

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
      (this.answers[value.index])[value.innerIndex] = Object.assign({}, value.item)
      if(Object.keys(value.item).length === 0)
        (this.answers[value.index])[value.innerIndex].form_item_no = null;
      else
        (this.answers[value.index])[value.innerIndex].form_item_no = value.formItemNo;
      (this.answers[value.index])[value.innerIndex].title = value.title;
      (this.answers[value.index])[value.innerIndex].type = value.type;
      (this.answers[value.index])[value.innerIndex].index = value.index;
    }
  }

  submit() {
    for(var i = 0; i < this.answers[4].length; i++) {
      if(this.answers[4][i] && !this.answers[4][i].form_item_no) {
        alert(this.answers[4][i].title + ' 항목을 확인해주세요.');
        return ;
      }
    }

    var itemsArr = [];
    for(var i = 0; i < this.answers.length; i++) {
      itemsArr = itemsArr.concat(this.answers[i]);
    }

    // console.log({'user': this.userInfo, 'items': itemsArr});
    this.http.post('/apply', {'user': this.userInfo, 'items': itemsArr})
    .subscribe(
      data => {
        console.log(data.json().userFormNo);
        this.router.navigateByUrl('/result/' + data.json().userFormNo);
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

  userNext() {
    console.log(this.userInfo);
    for(var i = 0; i < this.userInfo.length; i++) {
      if(!this.userInfo[i].form_item_no) {
        alert(this.userInfo[i].title + ' 항목을 확인해주세요.');
        return ;
      }
    }
    this.now = 1;
  }

  next(idx) {
    for(var i = 0; i < this.answers[idx - 1].length; i++) {
      if(this.answers[idx - 1][i] && !this.answers[idx - 1][i].form_item_no) {
        alert(this.answers[idx - 1][i].title + ' 항목을 확인해주세요.');
        return ;
      }
    }
    this.now = idx + 1;
  }
}
