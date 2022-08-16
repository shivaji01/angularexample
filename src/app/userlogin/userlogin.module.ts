import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserloginRoutingModule } from './userlogin-routing.module';
import { LoginComponent } from './login/login.component';
import { VerifyloginComponent } from './verifylogin/verifylogin.component';
import { LoginerrorComponent } from './loginerror/loginerror.component';


@NgModule({
  declarations: [
    LoginComponent,
    VerifyloginComponent,
    LoginerrorComponent
  ],
  imports: [
    CommonModule,
    UserloginRoutingModule
  ],
  exports :[
    LoginComponent,
    VerifyloginComponent,
    LoginerrorComponent
  ]
})
export class UserloginModule { }

