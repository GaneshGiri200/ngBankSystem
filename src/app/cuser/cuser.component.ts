import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/service/global.service';
import { Router } from '@angular/router';
import {RegName, RegContact, RegEmail} from '../shared/constatnts/constants';

@Component({
  selector: 'app-cuser',
  templateUrl: './cuser.component.html',
  styleUrls: ['./cuser.component.scss']
})
export class CuserComponent implements OnInit {

  namePattern= RegName;
  contactPattern=RegContact;
  emailPattern=RegEmail;

  constructor(private _globSer:GlobalService, private _router:Router) { }

  ngOnInit(): void {
  }

  addData(val:any){
    const userData = {
      name:val.name,
      email:val.email,
      gender:val.gender,
      dob:val.date,
      savings:val.savings,
      address:val.address,
      mobile:val.mobile
    }

    this._globSer.addUser("users", userData).subscribe(()=>{
      alert("User Data Addes Successfully");
      this._router.navigate(['/users']);
    }, (error:any)=>{
      alert("error");
    })
  }
}
