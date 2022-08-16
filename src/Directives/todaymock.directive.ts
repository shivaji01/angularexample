import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appTodaymock]'
})
export class TodaymockDirective {
 
  // @Input() appTodaymock='';

  // constructor( private newel:ElementRef) {
  //   // this.newel.nativeElement.style.backgroundColor='red'
  //  }
  //  @HostListener ('mouseenter') mousein(){
  //   this.onmouseover ('purple')
  //  }
  //  @HostListener ('mouseleave') mouoseout(){
  //   this.onmouseover('cyan')
  //  }
  //  onmouseover(color:any)
  //  {
  // this.newel.nativeElement.style.backgroundColor=color 
  // }



  constructor( private newel:ElementRef) {
    // this.newel.nativeElement.style.backgroundColor='red'
    
   }

//    @HostListener ('mouseenter') onmouseenter(){
// this.highlight(this.appTodaymock || 'violet')
//    }
//    @HostListener ('mouseleave') onmouseleave(){
//     this.highlight(this.appTodaymock || 'yellow')
//        }
    

//    highlight(color:any)
// {
//   this.newel.nativeElement.style.backgroundColor=color
// }
}
