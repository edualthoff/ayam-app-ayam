import { IconActiveDirective } from './icon-active.directive';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appIconButtonChange]'
})
export class IconButtonChangeDirective {

  protected navButton: Array<IconActiveDirective> = [];


  constructor() { }

  addLink(link: IconActiveDirective): void {
    this.navButton.push(link);
  }

  closeOtherButton(buttonOpen: IconActiveDirective): void {
    console.log("aqu closeOtherButton")
    this.navButton.forEach((buttonOld: IconActiveDirective) => {
      if (buttonOld !== buttonOpen) {
        buttonOpen.open = false;
      }
    });
  }
}
