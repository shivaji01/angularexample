import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/Services/mock-data.service';

@Component({
  selector: 'app-adddegree',
  templateUrl: './adddegree.component.html',
  styleUrls: ['./adddegree.component.scss']
})
export class AdddegreeComponent implements OnInit {
formdata:any[]=[]
  degreeform=new FormGroup({
    Degree:new FormControl(''),
    College:new FormControl(''),
    Marks:new FormControl(''),
    passingyear:new FormControl(''),
    University:new FormControl('')
  })
  constructor(private route:Router, private degree:MockDataService) { }

  ngOnInit(): void {

  }
  Adddegree(data:any)
  {
    console.log(data.value)
this.degree.degreepostdata(data).subscribe((value:any)=>
{
  this.formdata=value
})
  }


}
