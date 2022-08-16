import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthloadGuard } from './Guards/authload.guard';
import { LoginComponent } from './userlogin/login/login.component';
import { LoginerrorComponent } from './userlogin/loginerror/loginerror.component';
import { VerifyloginComponent } from './userlogin/verifylogin/verifylogin.component';

const routes: Routes = [
  {path: '', redirectTo:'lazyrouting', pathMatch:'full'},
  {path: 'loginpage', component: LoginComponent},
  {path: 'verifylogin', component: VerifyloginComponent},
  {path: 'loginerror', component: LoginerrorComponent},
  { path: 'lazyrouting', loadChildren: () => import('./lazyrouting/lazyrouting.module').then(m => m.LazyroutingModule),canLoad:[AuthloadGuard] },
  
// {path : 'admin', loadChildren:()=>import ('./admin/admin.module').then(m=>m.AdminModule)},
// {path : 'user', loadChildren:()=>import ('./user/user.module').then(m=>m.UserModule)}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]

})
export class AppRoutingModule { }
export const routingComponents = [ ]
