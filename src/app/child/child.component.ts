import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 
  // @Input() messageFromParent = ''

  // @Output() simplemsg=new EventEmitter()
  // @Output() childtoparent=new EventEmitter<any>();
  @Output() newmsg= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
// Onbuttonclick ()
// {
//   this.newmsg.emit('hi from child to parent')
// }

Onbuttonclick (txtmsg:any)
{
  this.newmsg.emit(txtmsg)
}

  // OnButtonclick()
  // {
  //   this.simplemsg.emit('msg from child')
  // }


  // passdatatoParent()
  // {
  //   // this.childtoparent.emit('hello from child to parent')
  // }
}

