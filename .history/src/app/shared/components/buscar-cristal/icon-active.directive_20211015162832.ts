import { IconButtonChangeDirective } from './icon-button-change.directive';
import { Directive, ElementRef, HostBinding, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIconActive]'
})
export class IconActiveDirective implements OnInit {

  protected OPEN = false;
  protected nav: IconButtonChangeDirective;

  constructor(private render: Renderer2, private el: ElementRef, @Inject(IconButtonChangeDirective) nav: IconButtonChangeDirective) {
    this.nav = nav;
  }

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent): void {
    this.toggle();
  }

  @HostBinding('class.open')
  @Input()
  get open(): boolean {
    return this.OPEN;
  }
  set open(value: boolean) {
    this.OPEN = value;
    // Only sub menu can be open
    if (value) {
      this.nav.closeOtherButton(this);
    }
  }

  ngOnInit(): void {
    this.nav.addLink(this);
  }

  toggle() {
    if(this.OPEN == true)
    console.log("ee "+this.el.nativeElement.hasAttribute("onclick"))
    this.el.nativeElement.hasAttribute("onclick")
    this.render.addClass(this.el.nativeElement, 'bt-active')
  };
}
