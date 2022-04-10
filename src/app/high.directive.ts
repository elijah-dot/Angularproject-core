import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHigh]'
})
export class HighDirective {
  

constructor(private elem:ElementRef) {
   elem.nativeElement.style.color = "green"
 }

}
