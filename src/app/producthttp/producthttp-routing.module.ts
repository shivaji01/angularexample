import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'product-comp', component:ProductComponentComponent},
  {path: 'products/:id', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducthttpRoutingModule { }
