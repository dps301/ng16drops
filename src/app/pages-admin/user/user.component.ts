import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    result: any = [];
    info: any = [];
    detail: any = [];
    constructor(private http: HttpService) { }
    ngOnInit() {
        this.http.get('/admin/user')
            .subscribe(
                data => {
                  this.result = data.json();
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
