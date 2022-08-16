import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpstaticdataService {

  constructor(private http:HttpClient) { }


  // convertDollerToruppess(doller:number)
  // {
  //   return 600;
  // }


getprofiledata()
{
let urlpath='/assets/httpmockdata.json'
  
 // let urlpath='/assets/apinew.json'
return this.http.get(urlpath)
}


}
