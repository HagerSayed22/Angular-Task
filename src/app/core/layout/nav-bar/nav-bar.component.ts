import { Component } from '@angular/core';
import { Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles:['a{  text-decoration: none;color: white;}','#BtnDark{font-size: 15px;}','span{padding: 0% 55% 0% 13%}']
})
export class NavBarComponent {
 @Output() mode = new EventEmitter<boolean>();
  @Input() dark=false;
  convertMode(event:any){
     this.mode.emit(this.dark)
     if(this.dark==false){
      event.target.style.backgroundColor="white";
      event.target.style.color="black";
     }
     else{
      event.target.style.backgroundColor="black";
      event.target.style.color="white";
     }
    }
}
