import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../Model/Products';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //Studdetails: any;
  Proddetails=new FormGroup({
    Username:new FormControl(''),
    Productname:new FormControl(''),
    Description:new FormControl(''),
    Price:new FormControl(''),
    Quantity:new FormControl(''),
  })
  createForm(){
    this.Proddetails = this.formbuilder.group({
      id: [],
      Username: [''],
      Productname: [''],
      Description: [],
      Price: [],
      Quantity: []
    })
  }
  actionname:string="";
  id:any=0
  product:products[]=[];
  constructor(private route:Router, private formbuilder:FormBuilder, private service:ProductserviceService, private router1:ActivatedRoute) {
   }
  ngOnInit(): void {
this.createForm()
    this.id = this.router1.snapshot.params['id'];
      console.table('id-', this.id)
    if(this.id)
    {
        this.actionname='update'
        this.service.getproductbyId(this.id).subscribe(value=>
          {
            this.Proddetails.setValue(value);
            console.table(value);
          })
  }
  else{
    this.actionname='create'; 
  }
  }

  Submit(data:any)
  {
    if(this.actionname== "create")
    {
    this.service.postdata(data).subscribe((value)=>{
      this.route.navigateByUrl('product-comp')
    })
    console.log(this.Proddetails.value)
  }
else
{
   this.service.putdata(this.id, data).subscribe(el=>
    {
      this.route.navigateByUrl('product-comp');
      console.table(el)
    })
  }
  }



}
