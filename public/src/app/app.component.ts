import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private newTask: { description: string; title: string };
  constructor(private _httpService: HttpService){}
  ngOnInit(){

  }


}
