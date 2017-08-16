import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    result: Array<any> = [];
    info: Array<any> = [];
    detail: Array<any> = [];
    pageNo: number = 1;
    pageSize: number = 15;
    totalSize: number = 0;

    constructor(private http: HttpService) { }

    ngOnInit() {
        this.search();
    }

    search(pageNo = 1) {
        this.pageNo = pageNo;
        this.http.get('/admin/user?'+'&pageNo='+this.pageNo+'&pageSize='+this.pageSize)
        .subscribe(
            data => {
                this.totalSize = data.json().total == 0 ? 1 : data.json().total;
                this.result = data.json().item;
            }
        );
    }

    find(formNo:number){
        this.http.get('/admin/user/info?userFormNo='+formNo)
        .subscribe(
            data => {
                this.info = data.json();
            }
        );

        this.http.get('/admin/user/detail?userFormNo='+formNo)
        .subscribe(
            data => {
                this.detail = data.json();
            }
        );
    }
}