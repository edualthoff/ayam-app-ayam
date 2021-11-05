import { IconButtonChangeDirective } from './icon-button-change.directive';
import { Directive, ElementRef, HostBinding, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIconActive]'
})
export class IconActiveDirective implements OnInit {

  protected nav: IconButtonChangeDirective;

  constructor(private render: Renderer2, private el: ElementRef, @Inject(IconButtonChangeDirective) nav: IconButtonChangeDirective) {
    this.nav = nav;
  }

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent): void {
    this.toggle();
    console.log("ee click ")

  }

  ngOnInit(): void {
    this.nav.addLink(this);
  }

  toggle() {
    console.log("ee toggle "+this.el.nativeElement.hasAttribute("onclick"))

    if (this.el.nativeElement.hasAttribute("onclick")) {
      console.log("ee toggle "+this.el.nativeElement.hasAttribute("onclick"))
      this.render.addClass(this.el.nativeElement, 'bt-active')
    } else {
      this.nav.closeOtherButton(this);
    }

  };
  removeClass() {
    this.render.removeClass(this.el.nativeElement, 'bt-active')
  }
}
