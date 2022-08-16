import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdata',
  templateUrl: './eventdata.component.html',
  styleUrls: ['./eventdata.component.scss']
})
export class EventdataComponent implements OnInit {
msg : string="";
msgtxt: string="";
msgcart:string="";
  constructor() { }

  ngOnInit(): void {
  }

  OnClick()
  {
    this.msg="message print successfully.... "
  }
//////////////////////

  ontextclick(event: any)
  {
console.log(event.target.value)
  }

////////////////////
  AddToCart(event:any)
  {
this.msgcart=event.target.value + " Added to cart";
  }

}
