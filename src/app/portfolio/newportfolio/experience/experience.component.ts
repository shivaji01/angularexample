import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/Services/mock-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  tabledata:any[]=[];
  constructor(private route:Router, private experience:MockDataService) { }

  ngOnInit(): void {
this.experience.experiencedata().subscribe((el:any)=>
  {
    this.tabledata=el?.Experience })
  }

}
