import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  btn_txt: string = "";

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getBtn();
  }

  getBtn() {
    this.http.get('/btn')
    .subscribe(
      data => {
        this.btn_txt = data.json().btn;
        console.log(data.json());
      }
    );
  }

  saveBtn() {
    this.http.put('/btn', {btn: this.btn_txt})
    .subscribe(
      data => {
        alert('저장되었습니다.');
      }
    );
  }
}
