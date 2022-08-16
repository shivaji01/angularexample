import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/Services/mock-data.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
showdata: any=[]
name='shivaji'
  constructor(private route: Router, private mockdata: MockDataService) { }

  ngOnInit(): void {
this.mockdata.aboutus().subscribe((aboutus1:any)=>
{console.log(aboutus1) 
  this.showdata=aboutus1?.about})


  }



}
