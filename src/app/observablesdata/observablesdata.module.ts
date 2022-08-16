import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesdataRoutingModule } from './observablesdata-routing.module';
import { ObsdataComponent } from './obsdata/obsdata.component';
import { ObsnewComponent } from './obsnew/obsnew.component';


@NgModule({
  declarations: [
    ObsdataComponent,
    ObsnewComponent
  ],
  imports: [
    CommonModule,
    ObservablesdataRoutingModule
  ]
})
export class ObservablesdataModule { }
