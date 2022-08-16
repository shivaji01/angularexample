import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-obsnew',
  templateUrl: './obsnew.component.html',
  styleUrls: ['./obsnew.component.scss']
})
export class ObsnewComponent implements OnInit {

  constructor() { }



counterobservble= interval(1000);
counterSub:any;



  ngOnInit(): void {
  // this.counterSub=  this.counterobservble.subscribe((val)=>
  //   {
  //     console.log(val);
  //   })
  }


  unsubscribe()
  {
this.counterSub.unsubscribe();
  }


  subscribe()
  {
    this.counterSub=  this.counterobservble.subscribe((val)=>
    {
      console.log(val);
    })
  }

}
