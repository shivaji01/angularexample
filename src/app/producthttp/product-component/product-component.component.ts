import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit {
data:any

  constructor(private service:ProductserviceService, private route:Router) { }

  ngOnInit(): void {
    this.service.getproductdata().subscribe((value:any) =>
    {
      this.data=value
      console.log(value)
  
    })
  }

  deleteproductdata(id:number, index:number)
  {
    this.service.deleteProductdetails(id).subscribe(el=>{
      console.log(el);
      this.data.splice(index,1);
    })
  }


//to update data
  // updateProdDetails(id:number){
  //   this.route.navigate(['update-product',id]);
  //  }




}
