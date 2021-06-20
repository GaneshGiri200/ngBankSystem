import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../shared/service/global.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  id:number=0;
  userObj:any;
  userData:any;
  puser:any;

  constructor(private _actRoute:ActivatedRoute, private _globSer:GlobalService,
    private _router:Router) { }

  ngOnInit(): void {
    this._actRoute.params.subscribe((para)=>{
      this.id=Number(para.id);
    });
    this._globSer.getSingleRecord("users",this.id).subscribe((res)=>{
      this.userObj=res;
    }, (error:any)=>{
      alert("error");
    });

    this._globSer.get("users").subscribe((res)=>{
      this.userData = res;
    }, (error:any)=>{
      alert("error");
    });
  }

  transferMoney(val:any){
    if(this.userObj.savings>val.amount){

      const uid = Number(val.uid);

      this._globSer.getSingleRecord("users", uid).subscribe((res)=>{
        this.puser=res;

        const rAmount = this.userObj.savings - val.amount;

        const pAmount = this.puser.savings + val.amount;

      const rChange ={
        name:this.userObj.name,
        email:this.userObj.email,
        gender:this.userObj.gender,
        dob:this.userObj.date,
        savings:rAmount,
        address:this.userObj.address,
        mobile:this.userObj.mobile
      }

      const pChange ={
        name:this.puser.name,
        email:this.puser.email,
        gender:this.puser.gender,
        dob:this.puser.date,
        savings:pAmount,
        address:this.puser.address,
        mobile:this.puser.mobile
      }

      this._globSer.updateRecord("users", this.id, rChange).subscribe(()=>{
      }, (error:any)=>{
        alert("error");
      });

      this._globSer.updateRecord("users", uid, pChange).subscribe(()=>{
      }, (error:any)=>{
        alert("error");
      });

      const history = `Amount ${val.amount} is transfered from ${this.userObj.name} to ${this.puser.name}`;

      const historyData = {
      statement:history
      }

      this._globSer.addUser("history", historyData).subscribe(()=>{
      }, (error:any)=>{
        alert("error");
      })

      alert(history);

      this._router.navigate(['/users']);

      }, (error:any)=>{
        alert("error");
      });

      } else {
        alert("Amount is more than available balance please enter correct amount");
      }
  }

}