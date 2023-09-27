import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:['.dark {background-color: rgba(8, 8, 8, 0.827);}']
})
export class AppComponent {
  title = 'displayProducts';
  light:boolean=false;
  recieveMode(event:any){
    if(event){
    this.light=false;
    }else{
      this.light=true;
    }
  }
}
