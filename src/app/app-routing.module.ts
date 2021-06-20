import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CuserComponent} from './cuser/cuser.component';
import {VusersComponent} from './vusers/vusers.component';
import {ThistoryComponent} from './thistory/thistory.component';
import {PnfComponent} from './pnf/pnf.component';
import{EditComponent} from'./edit/edit.component';
import { TransferComponent } from './transfer/transfer.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'user', component:CuserComponent},
  {path:'users', component:VusersComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'transfer/:id', component:TransferComponent},
  {path:'history', component:ThistoryComponent},
  {path:'**', component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
