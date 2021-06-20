import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/service/global.service';


@Component({
  selector: 'app-thistory',
  templateUrl: './thistory.component.html',
  styleUrls: ['./thistory.component.scss']
})
export class ThistoryComponent implements OnInit {

  historyData:any;
  dbError:any;

  constructor(private _globSer:GlobalService) { }

  ngOnInit(): void {
    this._globSer.get("history").subscribe((res)=>{
    this.historyData = res;

      console.log(this.historyData);
      
    }, (error:any)=>{
      this.dbError="Database Not Connected";
    });
  }
}
