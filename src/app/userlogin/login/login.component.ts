import { Component, OnInit } from '@angular/core';
import { from, interval, map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

number=[10,20,30,40,50,60]
//newarry=[1,2,3,4,5,6,7,8,9,10]

message= from(this.number)
//result=from(this.newarry)
// counter = interval(500  )
  constructor() { }

  ngOnInit(): void {
// this.message.subscribe(item=>console.log(item))
//  this.counter.subscribe(x=>console.log(`messsage displayed after ${x+1} seconds`)) }

//this.newarry.pipe(map(val=>val*2)).subscribe((x)=>{console.log(x)})
//this.result.pipe(map(x=> x-2)).subscribe((value:any)=> console.log(value))
  }

}
