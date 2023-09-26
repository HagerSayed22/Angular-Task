import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  light:boolean=false;
  title = 'displayProducts';
  ConvertMode(){
   if(this.light==false){
    this.light=true
   }
   else{
    this.light=false;
   }
  }
}
