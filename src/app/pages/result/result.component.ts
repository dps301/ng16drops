import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  barLabel: Array<any> = ["유수분관리", "민감관리", "손상관리", "노화관리", "탄력관리"];
  barAmt: Array<any> = [78, 74, 63, 79, 57];
  cards: Array<any> = [
    {image: "assets/images/icon_for_plants.png", content: "fdasfsdafdsafddddddddddddddddddddddddddddddddddsdsdsdsdsasffdasfsdafdsafddddddddddddddddddddddddddddddddddsdsdsdsdsasf", "imgText": "가자가자"},
    {image: "assets/images/icon_for_berry.png", content: "fdasfsdafdsafddddddddddddddddddddddddddddddddddsdsdsdsdsasffdasfsdafdsafddddddddddddddddddddddddddddddddddsdsdsdsdsasf", "imgText": "가자가자"},
    {image: "assets/images/icon_for_chemical.png", content: "fdasfsdafdsafddddddddddddddddddddddddddddddddddsdsdsdsdsasffdasfsdafdsafddddddddddddddddddddddddddddddddddsdsdsdsdsasf", "imgText": "가자가자"},
    {image: "assets/images/icon_for_chemical2.png", content: "fdasfsdafdsafddddddddddddddddddddddddddddddddddsdsdsdsdsasffdasfsdafdsafddddddddddddddddddddddddddddddddddsdsdsdsdsasf", "imgText": "가자가자"},
  ];
  warning: Array<any> = ["유수분관리", "민감관리", "손상관리", "노화관리", "탄력관리"];
  type = 'radar';
  data = {
    labels: this.barLabel,
    datasets: [
      {
        label: "",
        backgroundColor: 'rgba(152, 201, 236, 1)',
        borderColor: 'rgba(152, 201, 236, 1)',
        pointBackgroundColor: 'rgba(152, 201, 236, 0)',
        pointBorderColor: 'rgba(152, 201, 236, 0)',
        data: this.barAmt,
        fill: true,
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false
    },
    scale: {
      ticks: {
        display: false,
        min: 0,
        max: 100,
      },
      pointLabels: {
        fontSize: 13,
        fontColor: '#818285'
      }
    }
  };
  result: any = {};
  items: Array<any> = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('/result/62')
    .subscribe(
      data => {
        this.result = data.json();
        this.items = this.result.item;
        console.log(this.result);
      }
    );
  }
}
