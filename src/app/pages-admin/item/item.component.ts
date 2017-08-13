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
  selectedItemDetail: any;

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
    this.http.get('/admin/item/detail', {itemNo: itemNo})
    .subscribe(
      data => {
        console.log(data.json());
        this.selectedItemDetail = data.json();
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
