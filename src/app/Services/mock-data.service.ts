import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  URL='http://localhost:3000/Experience'

  constructor(private http : HttpClient) { 


} 

loginformdata()
{
  return this.http.get('/assets/login.json')
}

aboutus()
{
  return this.http.get('assets/aboutus.json')
}

experiencedata()
{
  return this.http.get('assets/experience.json')
}

degreepostdata(data:any)
{
  return this.http.post<any>(this.URL, data)
}

  }



