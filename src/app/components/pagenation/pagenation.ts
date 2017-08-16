import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'pagenation',
	templateUrl: './pagenation.html',
	styleUrls: ['./pagenation.scss']
})
export class PageNationComponent implements OnInit, OnChanges {
  @Input() pageNo: number = 1;
  @Input() pageSize: number = 50;
  @Input() totalSize: number = 1;
  @Input() style: string = 'normal';
  @Output('update') update = new EventEmitter<any>();

  pageArr:Array<number> = [];
  showedPageArr:Array<number> = [];
  
  constructor() { }
  
  ngOnInit() { 
    this.mkPageNation(this.totalSize, this.pageSize);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.mkPageNation(this.totalSize, this.pageSize);
  }

	getStyle() {
		if(this.style == 'simple')
			return {'simple': true};
		else
			return {'normal': true};
	}

  mkPageNation(dataSize, pageSize) {
  	this.pageArr = []
  	for(var i = 0; i < dataSize/pageSize; i++) {
  	  this.pageArr.push(i + 1);
  	}
  	if(this.pageNo%10 == 1)
  	  this.mkShowedPageNation();
  }

  mkShowedPageNation(page = this.pageNo) {
  	this.showedPageArr = [];
  	for(var i = page; i < page + 10 && i < this.totalSize/this.pageSize + 1; i++)
  	  this.showedPageArr.push(i);
  }
  
  goPage(pageNum) {
  	this.pageNo = pageNum;
  	if(this.pageNo%10 == 1)
  	  this.mkShowedPageNation();
  	else if(this.pageNo%10 == 0) {
  	  this.mkShowedPageNation(this.pageNo - 9);
  	}
    this.update.emit(this.pageNo);
  }

  pagePM(value) {
  	switch(value) {
  	  case '+':
  		if(this.pageNo < this.pageArr.length) {
  		  this.pageNo++;
  		  this.goPage(this.pageNo);
  		}
  		break;
  	  case '-':
  		if(this.pageNo > 1) {
  		  this.pageNo--;
  		  this.goPage(this.pageNo);
  		}
  		break;
  	}
  }
}