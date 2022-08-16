import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddataComponent } from './adddata/adddata.component';
import { DeletedataComponent } from './deletedata/deletedata.component';
import { HomedataComponent } from './homedata/homedata.component';
import { LazyroutingComponent } from './lazyrouting.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';

const routes: Routes = [
{ path: '', component: HomedataComponent },
  { path: 'lazyroute', component: LazyroutingComponent },
{ path: 'homedata', component: HomedataComponent },
{ path: 'adddata', component: AdddataComponent },
{ path: 'deletedata', component: DeletedataComponent },
{ path: 'updatedata', component: UpdatedataComponent },

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyroutingRoutingModule { }
