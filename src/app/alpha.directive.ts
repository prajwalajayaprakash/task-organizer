import {Directive} from "@angular/core";

@Directive({ selector: '[onlyAlpha]',
  host: {
    '(keypress)': '_onKeypress($event)'
  }
})
export class AlphaDirective {
  key;

  _onKeypress(event): void {
    this.key = event.keyCode;
     if ((this.key >= 8 && this.key <= 9) || (this.key >= 15 && this.key <= 64) || (this.key >= 123)) {
       alert('Please enter only alphabets');
       event.preventDefault();
     }
  }
}
