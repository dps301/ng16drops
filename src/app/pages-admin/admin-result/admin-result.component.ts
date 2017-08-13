import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-admin-result',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.scss']
})
export class AdminResultComponent implements OnInit {

  result: any = [];
  info: any = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.load();
  }
  load() {
      this.http.get('/admin/result')
          .subscribe(
              data => {
                console.log(data)
                this.result = data.json();
              }
          );
  }
  find(resultNo:number) {
      this.http.get('/admin/result/detail?resultNo='+resultNo)
          .subscribe(
              data => {
                this.info = data.json().item;
                console.log(this.info)
              }
          );
  }
  save(resultNo,name){
      this.http.put('/admin/result',{resultNo:resultNo,name:name})
          .subscribe(
              data => {
                this.load();
              }
          );
  }
  save2(item){
      this.http.put('/admin/result/detail',
          {
            result_manage_no:item.result_manage_no,
            title:item.title,
            con:item.con,
            icon_url:item.icon_url
          })
          .subscribe(
              data => {
                this.load();
              }
          );
  }

}
