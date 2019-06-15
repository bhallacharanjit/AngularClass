import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {

  constructor(Element:ElementRef) { 

    Element.nativeElement.innerText = "The Result is: ";


  }

}
