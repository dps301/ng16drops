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

  selectGroup(idx) {
    this.selectedGroupIdx = idx;
    this.getCondition();
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
}
