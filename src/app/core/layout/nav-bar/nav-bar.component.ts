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
  convertMode(){
     this.mode.emit(this.dark)
     if(this.dark==false){
      document.getElementById("BtnDark")!.style.backgroundColor="white";
      document.getElementById("BtnDark")!.style.color="black";
     }
     else{
      document.getElementById("BtnDark")!.style.backgroundColor="black";
      document.getElementById("BtnDark")!.style.color="white";
     }
    }
}
