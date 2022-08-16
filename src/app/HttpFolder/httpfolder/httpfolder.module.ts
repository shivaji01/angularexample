import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpfolderRoutingModule } from './httpfolder-routing.module';
import { Http1Component } from './http1/http1.component';


@NgModule({
  declarations: [
    Http1Component
  ],
  imports: [
    CommonModule,
    HttpfolderRoutingModule
  ],
  exports:[
    Http1Component
  ]

})
export class HttpfolderModule { }
