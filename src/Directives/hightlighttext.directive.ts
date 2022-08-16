import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlighttext]'
})
export class HightlighttextDirective {

  constructor(private newele:ElementRef) {
    this.newele.nativeElement.style.backgroundColor= 'orange'
   }

   @HostListener('mouseenter') mymousemove(){
  //  this.newele.nativeElement.style.backgroundColor= 'pink'
   this.mouseheilight('red')
   }
   @HostListener ('mouseleave' ) mymouseleave()
   {
   //  this.newele.nativeElement.style.backgroundColor= 'green'
   this.mouseheilight('blue')
   }
   mouseheilight(color:any)
   {
    this.newele.nativeElement.style.backgroundColor= color
   }
}
