import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {
  text='';
  
  constructor() { }

  ngOnInit(): void {
  }


  show(text:any)
  {
    console.log(this.text)
  }

}
