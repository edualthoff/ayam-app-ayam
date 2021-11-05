import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIconActive]'
})
export class IconActiveDirective {

  constructor(private render: Renderer2, private el: ElementRef) { }

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent): void {
    this.toggle();
  }

  toggle() {
    console.log("ee "+this.el.nativeElement.hasAttribute("onclick"))
    this.el.nativeElement.hasAttribute("onclick")
    this.render.addClass(this.el, 'bt-active')
  };
}
