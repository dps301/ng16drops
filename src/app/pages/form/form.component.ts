import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  items: Array<string> = [];
  nowIdx: number = 1;
  objIdx: number = 14;
  total: number = 45;

  constructor(private http: HttpService) { }

  ngOnInit() {
    $(window).on("load", () => {
      $("a[rel='m_PageScroll2id']").mPageScroll2id({
        layout: "horizontal",
        forceSingleHighlight: true,
        offset: "#id"
      });
    });

    this.http.get('/items')
    .subscribe(
      data => {
        console.log(data.json());
        this.items = data.json();
      }
    );
  }
}
