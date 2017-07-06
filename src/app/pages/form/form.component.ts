import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit {
  items: Array<string> = [];
  nowIdx: number = 1;
  objIdx: number = 14;
  total: number = 45;

  constructor(private http: HttpService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.http.get('/items')
    .subscribe(
      data => {
        console.log(data.json());
        this.items = data.json();
      }
    );
  }

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src="assets/js/jquery.malihu.PageScroll2id.min.js";
    this.elementRef.nativeElement.appendChild(s);

    $(window).on("load", () => {
      $("a[rel='m_PageScroll2id']").mPageScroll2id({
        layout: "horizontal",
        forceSingleHighlight: true,
        offset: "#id"
      });
    });
  }
}
