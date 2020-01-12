import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @ViewChild('target_one') target_one;
  @ViewChildren('tiles') tiles: QueryList<any>;


  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
    // var element=document.getElementsByClassName("about");
    console.log(window.pageYOffset);
    if(window.pageYOffset > 200){
      console.log(this.target_one);
      // element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  else{
  }
};

  scrollToElement($element): void {
    console.log($element);  
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
