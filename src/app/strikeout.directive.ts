import {Directive, HostListener, ElementRef} from "@angular/core";

@Directive({selector: '[strike]'})
export class StrikeoutDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.strike();
  }

  private strike() {
    if (this.el.nativeElement.style.textDecoration === 'none') {
      this.el.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  }
}
