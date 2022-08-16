import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewProject1';


name=''
password=''
studentdetails = [{
  firstname:'shivaji',
  address:"karad",
  mobile:545351
},
{firstname:'bhavesh',
address:"pune",
mobile:545351
},
{firstname:'sagar',
address:"pune",
mobile:545351468
}]
//inbuild directive 
mystyle =
  {
'background-color' : 'red',
'font-size' : 'larger'
  }

  paracolor={
    'background-color' : 'yellow',
    'color' : 'green',
    'font-size' : 'large'
  }
  //inbuild directive 
 }