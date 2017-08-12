import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    result: any = {};
    items: Array<any> = [];
    constructor(private http: HttpService) { }
    ngOnInit() {
    this.http.get('/admin/user')
        .subscribe(
            data => {
              this.result = data.json();
            }
        );
    }

}
