import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GlobalService} from '../shared/service/global.service';
import {RegName, RegContact, RegEmail} from '../shared/constatnts/constants';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id:number=0;
  userObj:any;
  namePattern= RegName;
  contactPattern=RegContact;
  emailPattern=RegEmail;

  constructor(private _router:Router, private _actRoute:ActivatedRoute,
    private _globSer:GlobalService) { }

  ngOnInit(): void {
    this._actRoute.params.subscribe((para)=>{
      this.id=Number(para.id);
    });
    this._globSer.getSingleRecord("users",this.id).subscribe((res)=>{
      this.userObj=res;
      console.log(this.userObj);
    }, (error:any)=>{
      alert("error");
    });
  }

  updateData(val:any){
    const userData = {
      name:val.name,
      email:val.email,
      gender:val.gender,
      dob:this.userObj.dob,
      savings:val.savings,
      address:val.address,
      mobile:val.mobile
    }
    
    this._globSer.updateRecord("users", this.id, userData).subscribe(()=>{
      alert("User Data Updated");
      this._router.navigate(['/users']);
    }, (error:any)=>{
      alert("error");
    })
  }
}
