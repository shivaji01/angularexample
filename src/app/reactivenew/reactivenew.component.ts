import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivenew',
  templateUrl: './reactivenew.component.html',
  styleUrls: ['./reactivenew.component.scss']
})
export class ReactivenewComponent implements OnInit {
  username = new FormControl('',[Validators.required])


  Studdetails=new FormGroup({
    username: new FormControl('',[Validators.required, Validators.email]),
    course:new FormControl('',[Validators.required, Validators.minLength(3)]),
    college:new FormControl('',[Validators.required, Validators.maxLength(10)]),
    university: new FormControl('',[Validators.required]) 
  })
  constructor() { }

  ngOnInit(): void {
  }


  SubmitForm() {
    console.log(this.username.value)
  }

  updateForm() {
    this.username.setValue('James')
  }
  Onsubmitdata()
  {
    console.log(this.Studdetails)
  }
}
