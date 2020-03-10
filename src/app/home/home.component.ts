import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @ViewChildren('tiles') tiles: QueryList<any>;

  isshowbot=false;

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    this.openbot();
  }

  openbot(){
    console.log("openbot");
    this.isshowbot=!this.isshowbot;
  }
  scroll = (): void => {
    const arr = this.tiles.toArray();
    console.log(window.pageYOffset);
    if(window.pageYOffset >=288&&window.pageYOffset <=1000){
      console.log(arr[1].nativeElement.style);
      arr[1].nativeElement.style.height="25px";
      arr[1].nativeElement.style.width="25px";
      arr[0].nativeElement.style.height="15px";
      arr[0].nativeElement.style.width="15px";
      arr[2].nativeElement.style.height="15px";
      arr[2].nativeElement.style.width="15px";
    }
    else if(window.pageYOffset < 288){
      console.log(arr[1].nativeElement.style);
      arr[0].nativeElement.style.height="25px";
      arr[0].nativeElement.style.width="25px";
      arr[1].nativeElement.style.height="15px";
      arr[1].nativeElement.style.width="15px";
      arr[2].nativeElement.style.height="15px";
      arr[2].nativeElement.style.width="15px";
    }
    else if(window.pageYOffset > 1000){
      console.log("true");
      arr[0].nativeElement.style.height="15px";
      arr[0].nativeElement.style.width="15px";
      arr[1].nativeElement.style.height="15px";
      arr[1].nativeElement.style.width="15px";
      arr[2].nativeElement.style.height="25px";
      arr[2].nativeElement.style.width="25px";
    }
    
};

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
