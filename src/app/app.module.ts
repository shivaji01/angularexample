import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewrouteComponent } from './newroute/newroute.component';
import { OldrouteComponent } from './oldroute/oldroute.component';
import { UserloginModule } from './userlogin/userlogin.module';
import { HttpClientModule} from '@angular/common/http';
import { HightlighttextDirective } from '../Directives/hightlighttext.directive';
import { TodaymockDirective } from '../Directives/todaymock.directive';
import { ReactivenewComponent } from './reactivenew/reactivenew.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TestComponent } from './test/test.component';
import {MatSelectModule} from '@angular/material/select';
import { HttpfolderModule } from './HttpFolder/httpfolder/httpfolder.module';
import { NewportfolioModule } from './portfolio/newportfolio/newportfolio.module';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { EventdataComponent } from './eventdata/eventdata.component';
import { UserModule } from './serviceapp/user/user.module';
import { AdminModule } from './serviceapp/admin/admin.module';
import { ProducthttpModule } from './producthttp/producthttp.module';
import { ObservablesdataModule } from './observablesdata/observablesdata.module';
import { LazyroutingModule } from './lazyrouting/lazyrouting.module';
import { AuthloadGuard } from './Guards/authload.guard';




@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NewrouteComponent,
    OldrouteComponent,
    HightlighttextDirective,
    TodaymockDirective,
    ReactivenewComponent,
    TestComponent,
    NgswitchComponent,
    EventdataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserloginModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    HttpfolderModule,
    NewportfolioModule,
    UserModule,
    AdminModule,
    ProducthttpModule,
    ObservablesdataModule,
    LazyroutingModule

  ],
  providers: [AuthloadGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
