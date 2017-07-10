import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  items: any = [];
  objIdx: number = 14;
  total: number = 45;
  id: string = 's1';
  type: number = 0;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('/items')
    .subscribe(
      data => {
        console.log(data.json());
        this.items = data.json();

        // this.getTotal();
      }
    );
  }

  getTotal() {
    var total = 0;

    for(var i = 0; i < this.items.length; i++) {
      this.total += this.items[i].items.length;
    }
  }
}
