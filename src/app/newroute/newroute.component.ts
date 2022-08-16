import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../Services/mock-data.service';

@Component({
  selector: 'app-newroute',
  templateUrl: './newroute.component.html',
  styleUrls: ['./newroute.component.scss']
})
export class NewrouteComponent implements OnInit {

  studentdetails: any
  constructor( private data : MockDataService) { 
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

//   ngOnInit(): void {
// this.data.mockData().subscribe((response) =>{this.studentdetails= response} )
// this.studentdetails=this.data;
//   }





}
