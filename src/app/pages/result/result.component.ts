import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { HttpService } from "../../services/http.service";
import { ActivatedRoute } from "@angular/router";

declare let Kakao;
declare let FB;
@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  barLabel: Array<any> = [
    "유수분관리",
    "민감관리",
    "색소침착관리",
    "노화관리",
    "탄력관리"
  ];
  barAmt: Array<any> = [78, 74, 63, 79, 57];
  warning: Array<any> = [
    "유수분관리",
    "민감관리",
    "색소침착관리",
    "노화관리",
    "탄력관리"
  ];
  type = "radar";
  data = {};
  options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scale: {
      ticks: {
        display: false,
        min: 0,
        max: 100
      },
      pointLabels: {
        fontSize: 13,
        fontColor: "#818285"
      }
    }
  };
  result: any = {};
  items: Array<any> = [];
  id: number = 0;
  btn_txt: string = "";

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });
    this.http.get("/result/" + this.id).subscribe(data => {
      this.result = data.json();
      this.items = this.result.item;
      this.barAmt = this.result.g;
      this.data = {
        labels: this.barLabel,
        datasets: [
          {
            label: "",
            backgroundColor: "rgba(152, 201, 236, 0.5)",
            borderColor: "rgba(152, 201, 236, 1)",
            pointBackgroundColor: "rgba(152, 201, 236, 0)",
            pointBorderColor: "rgba(152, 201, 236, 0)",
            data: this.barAmt,
            fill: true
          }
        ]
      };
      this.cdRef.detectChanges();
      console.log(this.result);
    });
    this.getBtn();
  }

  getBtn() {
    this.http.get("/btn").subscribe(data => {
      this.btn_txt = data.json().btn;
      console.log(data.json());
    });
  }

  toInteger(val) {
    return Math.floor(val);
  }

  goShop() {
    window.open(this.result.link, "_system");
  }

  shareKt() {
    let link = `http://form16.cafe24app.com/result/${this.id}`;
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "16가지 피부 유형 중 당신의 피부유형은?",
        description: `당신은 ${this.result.name}입니다.`,
        imageUrl: "http://form16.cafe24app.com/img/rhddb.png",
        link: {
          mobileWebUrl: link,
          webUrl: link
        }
      }
    });
  }

  shareFb() {
    let link = `http://form16.cafe24app.com/result/${this.id}`;
    FB.ui(
      {
        method: "share_open_graph",
        action_type: "og.shares",
        display: "popup",
        action_properties: JSON.stringify({
          object: {
            "og:url": link,
            "og:title": "16가지 피부 유형 중 당신의 피부유형은?",
            "og:description": `당신은 ${this.result.name}입니다.`,
            "og:image": "http://form16.cafe24app.com/img/rhddb2.png"
          }
        })
      },
      response => {
        // Action after response
      }
    );
  }
}
