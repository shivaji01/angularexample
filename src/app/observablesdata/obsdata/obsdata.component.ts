import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-obsdata',
  templateUrl: './obsdata.component.html',
  styleUrls: ['./obsdata.component.scss']
})
export class ObsdataComponent implements OnInit {
// product={};


  constructor(private route:Router, private obs:ObservableService) { }
//   myobservables= new Observable ((observer)=>
// {
//   console.log("observable starts")
//   observer.next("1"),
//   observer.next("2"),
//   observer.next("3"),
//   observer.next("4")
// //all above data is streamed by one by one abservable means not in single call.
// });

//******************* */
// myobservables= new Observable ((observer)=>
// {
//   console.log("observable starts")
//   setTimeout(() => {  observer.next("1")  }, 1000);
//   setTimeout(() => {  observer.next("2")  }, 2000);
//   setTimeout(() => {  observer.next("3")  }, 3000);
//   setTimeout(() => {  observer.next("4")  }, 4000);
//   setTimeout(() => {  observer.next("5")  }, 5000);
//   setTimeout(() => {  observer.next("6")  }, 6000);
// //all abocve code is streamed by certain time intreval of time .
// });
//********************************** */
myobservables= new Observable ((observer)=>
{
  console.log("observable starts")
  setTimeout(() => {  observer.next("1")  }, 1000);
  setTimeout(() => {  observer.next("2")  }, 2000);
  setTimeout(() => {  observer.next("3")  }, 3000);
  setTimeout(() => {  observer.next("4")  }, 4000);
 // setTimeout(() => {  observer.error(new Error("Something went wrong!!!"))}, 4000);
  setTimeout(() => {  observer.next("5")  }, 5000);
  setTimeout(() => {  observer.complete()  }, 6000);
  //all above code is for to handle error on certian time interval
});



  ngOnInit(): void {
    this.myobservables.subscribe((val:any)=>
    {
      console.log(val)
    },(error)=>{alert("Error message")//this line is for to handle error alert on ui on certain time interval
  },()=>{alert("task completed")})


  }



}
