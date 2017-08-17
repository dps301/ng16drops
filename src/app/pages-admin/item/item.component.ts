import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  selectedGroupIdx: number = -1;
  group: Array<any> = [];
  condition: Array<any> = [];
  items: Array<any> = [];
  newItem: any = {title: '', type: '', number: '', limit: '', use_yn: ''};
  newItemDetail: any = {content: '', score: ''};
  selectedItemDetail: any;
  selectedItemNo: number = -1;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getGroup();
  }

  getGroup() {
    this.http.get('/admin/group')
    .subscribe(
      (data) => {
        this.group = data.json();
      }
    );
  }
  
  saveGroup(item) {
    this.http.put('/admin/group', {"groupNo": item.groupNo, "title": item.title, "descript": item.descript, "offset": item.offset, "mod": item.mod, "mul": item.mul})
    .subscribe(
      data => {
        console.log('group saved');
        this.getGroup();
      }
    );
  }

  selectGroup(idx) {
    this.selectedGroupIdx = idx;
    this.getCondition();
    this.getItem();
  }

  getCondition() {
    console.log(this.group);
    console.log(this.selectedGroupIdx);
    
    this.http.get('/admin/group/condition', {"groupNo": this.group[this.selectedGroupIdx].groupNo})
    .subscribe(
      data => {
        this.condition = data.json();
      }
    );
  }

  saveCondition(item) {
    this.http.put('/admin/group/condition', {"conditionNo": item.conditionNo, "min": item.min, "max": item.max})
    .subscribe(
      data => {
        console.log('condition saved');
        this.getCondition();
      }
    );
  }

  getItem() {
    this.http.get('/admin/item', {"groupNo": this.group[this.selectedGroupIdx].groupNo})
    .subscribe(
      data => {
        this.items = data.json();
      }
    );
  }

  addItem() {
    this.newItem.groupNo = this.group[this.selectedGroupIdx].groupNo;
    console.log(this.newItem);
    this.http.post('/admin/item', this.newItem)
    .subscribe(
      data => {
        console.log('item saved');
        this.getItem();
      }
    );
  }

  saveItem(item) {
    item.groupNo = this.group[this.selectedGroupIdx].groupNo;
    console.log(item);
    this.http.put('/admin/item', item)
    .subscribe(
      data => {
        console.log('item saved');
        this.getItem();
      }
    );
  }

  getItemDetail(itemNo) {
    this.selectedItemNo = itemNo;
    this.http.get('/admin/item/detail', {itemNo: itemNo})
    .subscribe(
      data => {
        console.log(data.json());
        this.selectedItemDetail = data.json();
      }
    );
  }

  addItemDetail() {
    this.selectedItemDetail = this.selectedItemNo;
    this.http.put('/admin/item/detail', this.selectedItemDetail)
    .subscribe(
      data => {
        console.log(data.json());
        this.getItemDetail(this.selectedItemNo);
      }
    );
  }
  
  saveItemDetail() {
    this.http.put('/admin/item/detail', this.selectedItemDetail)
    .subscribe(
      data => {
        console.log(data.json());
      }
    );
  }
}
