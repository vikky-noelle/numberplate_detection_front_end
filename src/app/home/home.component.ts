import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  imageurl: String = "assets/images/bot.png";
  filetoupload: File = null;
  constructor(
    private http: HttpClient 
  ) {
    if(navigator){
      navigator.geolocation.getCurrentPosition(pos=>{
        console.log("lala"+pos.coords.longitude);
        console.log(+pos.coords.latitude);
      });
    }
   }
  @ViewChildren('tiles') tiles: QueryList<any>;

  isshowbot=false;

  ngOnInit() {
    this.http.get('http://127.0.0.1:8100/vehicle/?format=json').subscribe(res=>{
      console.log(res);
    });
    window.addEventListener('scroll', this.scroll, true);
    this.openbot();
  }
  
  changepic(file: FileList){
    this.filetoupload=file.item(0);
    // show image preview
    var reader = new FileReader();
    reader.onload = (event: any)=>{
      this.imageurl=event.target.result;
    }
    reader.readAsDataURL(this.filetoupload);
  }

  onSubmit(){
    let formdata = new FormData();
    formdata.append('file', this.filetoupload);
    console.log(this.filetoupload);
    this.http.post('http://127.0.0.1:8100/vehicle/img',formdata).subscribe(res=>{
      console.log("worked");
    });
  }

  openbot(){
    console.log("openbot");
    this.isshowbot=!this.isshowbot;
  }
  scroll = (): void => {
    const arr = this.tiles.toArray();
    // console.log(window.pageYOffset);
    if(window.pageYOffset >=288&&window.pageYOffset <=1000){
      // console.log(arr[1].nativeElement.style);
      arr[1].nativeElement.style.height="25px";
      arr[1].nativeElement.style.width="25px";
      arr[0].nativeElement.style.height="15px";
      arr[0].nativeElement.style.width="15px";
      arr[2].nativeElement.style.height="15px";
      arr[2].nativeElement.style.width="15px";
    }
    else if(window.pageYOffset < 288){
      // console.log(arr[1].nativeElement.style);
      arr[0].nativeElement.style.height="25px";
      arr[0].nativeElement.style.width="25px";
      arr[1].nativeElement.style.height="15px";
      arr[1].nativeElement.style.width="15px";
      arr[2].nativeElement.style.height="15px";
      arr[2].nativeElement.style.width="15px";
    }
    else if(window.pageYOffset > 1000){
      // console.log("true");
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
