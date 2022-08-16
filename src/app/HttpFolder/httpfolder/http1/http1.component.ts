import { Component, OnInit } from '@angular/core';
import { HttpstaticdataService } from 'src/app/Services/httpstaticdata.service';

@Component({
  selector: 'app-http1',
  templateUrl: './http1.component.html',
  styleUrls: ['./http1.component.scss']
})
export class Http1Component implements OnInit {
profileinfo: any;
tableshow:boolean=false;

  constructor(private httpfold: HttpstaticdataService) { }

  ngOnInit(): void {

    // let money= this.httpfold.convertDollerToruppess(500)
    // console.log(money)
    // alert(money)


  //below code is for to fetch data from json and show it on tabular format  
  
// this.httpfold.getprofiledata().subscribe((res: any)=>//this line calls api to fetch data
//   {
//     this.profileinfo=res?.job;//this line takes data from json
//     console.log("profile data",this.profileinfo)
//     console.log("Information of shivaji=",res)
//   },(error)=>console.log("error shows here",error))//this line shows error handling and 
//   //error.message is used to show error in message
}

// below code is on buttonclick table show
Showtabledata()
{
  this.httpfold.getprofiledata().subscribe((res: any)=>//this line calls api to fetch data
  {
    this.profileinfo=res?.job;//this line takes data from json
this.tableshow =this.profileinfo ? true: false  // this line is for button click condition true or false to show data or not

    console.log("profile data",this.profileinfo)
    console.log("Information of shivaji=",res)
  },(error)=>console.log("error shows here",error))//this line shows error handling and 
  //error.message is used to show error in message
}

}

