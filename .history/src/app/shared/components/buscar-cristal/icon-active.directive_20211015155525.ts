import { Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIconActive]'
})
export class IconActiveDirective {

  constructor(private render: Renderer2, private el: Element) { }

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent): void {
    this.toggle();
  }

  toggle() {
    this.render.addClass(this.el, 'active')
  };
}
