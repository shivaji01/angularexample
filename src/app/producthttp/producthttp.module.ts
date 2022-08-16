import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ProducthttpRoutingModule } from './producthttp-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponentComponent
  ],
  imports: [
    CommonModule,
    ProducthttpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule

  ]

})
export class ProducthttpModule { }
