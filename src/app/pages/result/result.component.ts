import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  barLabel: Array<any> = ["유수분관리", "민감관리", "손상관리", "노화관리", "탄력관리"];
  barAmt: Array<any> = [78, 74, 63, 79, 57];
  type = 'radar';
  data = {
    labels: this.barLabel,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: 'rgba(152, 201, 236, 1)',
        borderColor: 'rgba(152, 201, 236, 1)',
        pointBackgroundColor: 'rgba(152, 201, 236, 0)',
        pointBorderColor: 'rgba(152, 201, 236, 0)',
        data: this.barAmt,
        fill: true
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor() { }

  ngOnInit() {
  }
}
