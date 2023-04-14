import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currenVal="";

  getVal(val:any)
  {
    console.warn(val);
    this.currenVal=val
  console.log(val.length)  }
}
