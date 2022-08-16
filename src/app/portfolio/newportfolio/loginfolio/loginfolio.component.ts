import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/Services/mock-data.service';

@Component({
  selector: 'app-loginfolio',
  templateUrl: './loginfolio.component.html',
  styleUrls: ['./loginfolio.component.scss']
})
export class LoginfolioComponent implements OnInit {
newobj:any;
  formlogin=new FormGroup({
    uname :new FormControl(''),
    password: new FormControl('')

  })
  constructor(private mockdata:MockDataService, private route:Router) { }

  ngOnInit(): void {
    this.mockdata.loginformdata().subscribe((new1:any)=>{
      console.log("from login json file data=", this.newobj=new1)
    });
  }

  loginform()
  {
    console.log(this.formlogin.value)
this.newobj.find((_loginobj:any)=>{
  if(this.formlogin.value.uname==_loginobj.uname &&
  this.formlogin.value.password==_loginobj.password  ) 
  {
    //alert("login successful")
    this.route.navigateByUrl('/aboutus')
    
  }
else{
  alert("not found")
}})
  }
}
