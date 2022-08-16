import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from './Model/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }
baseURL='http://localhost:3000/Products'


//post data
postdata(data:any)
 {
return this.http.post<any>(this.baseURL,data)
 } 
 

 //get data
 getproductdata()
 {
  return this.http.get(this.baseURL)
 }

//delete method
 deleteProductdetails( id: number) {
  // let headers = new HttpHeaders();
  // headers = headers.set("Content-type","application/json");
  console.log("req at service");
  return this.http.delete(this.baseURL + "/" + id, );
}
 


getproductbyId(id:number)
{

return this.http.get(this.baseURL+"/"+ id)
}


putdata(id:number, product:products)
{
  return this.http.put(this.baseURL+"/"+id, product)
}

}


