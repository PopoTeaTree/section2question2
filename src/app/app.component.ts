import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section2question2';
  public alldata:any = [];
  public searchFilter: any = '';
  query: String = '';

  ngAfterViewInit(){
    this.getData();//Put here your function or what you need
  } 
  constructor(private http: HttpClient) {
   
  }
  
  getData(){
    // const url ='https://api.publicapis.org/categories'
    const url ='https://api.publicapis.org/categories'
    this.http.get(url).subscribe((res)=>{
      this.alldata = res;
      console.log(this.alldata);
    })
  }
}

