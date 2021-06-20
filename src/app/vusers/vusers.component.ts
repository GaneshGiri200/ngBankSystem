import { Component, OnInit, TemplateRef } from '@angular/core';
import { GlobalService } from '../shared/service/global.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-vusers',
  templateUrl: './vusers.component.html',
  styleUrls: ['./vusers.component.scss']
})
export class VusersComponent implements OnInit {

  userData:any;
  dbError:any;
  modalRef:any;
  p:number = 1;
  searchKey:string = '';

  constructor(private _globSer:GlobalService, private _router:Router, 
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this._globSer.get("users").subscribe((res)=>{
      this.userData = res;
      
    }, (error:any)=>{
      this.dbError="Database Not Connected";
    });
  }

  delete(val:any){
    if(confirm("Are you sure to delete user with user id "+ val+" ?")){
      this._globSer.deleteUser("users", val).subscribe(()=>{
        alert("User Deleted Successfully!");
        this.fetchData();
    }, (error:any)=>{
      alert("User Not Deleted from Database");
    });
    }
  }

  addUser(){
    this._router.navigate(['user']);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
