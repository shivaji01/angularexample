import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyroutingRoutingModule } from './lazyrouting-routing.module';
import { LazyroutingComponent } from './lazyrouting.component';
import { AdddataComponent } from './adddata/adddata.component';
import { DeletedataComponent } from './deletedata/deletedata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { HomedataComponent } from './homedata/homedata.component';


@NgModule({
  declarations: [
    LazyroutingComponent,
    AdddataComponent,
    DeletedataComponent,
    UpdatedataComponent,
    HomedataComponent
  ],
  imports: [
    CommonModule,
    LazyroutingRoutingModule
  ],
  exports:[
    LazyroutingComponent,
    AdddataComponent,
    DeletedataComponent,
    UpdatedataComponent,
    HomedataComponent
  ]
})
export class LazyroutingModule { }
