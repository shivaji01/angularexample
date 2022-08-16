import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObsdataComponent } from './obsdata/obsdata.component';
import { ObsnewComponent } from './obsnew/obsnew.component';

const routes: Routes = [

  {path : 'obsdata', component:ObsdataComponent},
  {path : 'obsnew', component:ObsnewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesdataRoutingModule { }
