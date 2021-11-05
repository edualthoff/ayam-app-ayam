import { IconActiveDirective } from './icon-active.directive';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appIconButtonChange]'
})
export class IconButtonChangeDirective {

  protected navlinks: Array<IconActiveDirective> = [];


  constructor() { }

  addLink(link: IconActiveDirective): void {
    this.navlinks.push(link);
  }

  closeOtherButton(openLink: IconActiveDirective): void {
    this.navlinks.forEach((link: IconActiveDirective) => {
      if (link !== openLink) {
        link.open = false;
      }
    });
  }
}
