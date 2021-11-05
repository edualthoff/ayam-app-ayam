import { IconButtonChangeDirective } from './icon-button-change.directive';
import { Directive, ElementRef, HostBinding, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIconActive]'
})
export class IconActiveDirective implements OnInit {

  protected nav: IconButtonChangeDirective;
  protected OPEN = false;

  constructor(@Inject(IconButtonChangeDirective) nav: IconButtonChangeDirective, private render: Renderer2, private el: ElementRef) {
    this.nav = nav;
  }

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent): void {
    this.open = !this.open;
  }

  @HostBinding('class.bt-active')
  @Input()
  get open(): boolean {
    this.setClass();
    return this.OPEN;
  }
  set open(value: boolean) {
    this.OPEN = value;
    if(value){
      this.nav.closeOtherButton(this);
    }
  }

  ngOnInit(): void {
    this.nav.addLink(this);
  }
  private setClass() {
    if(this.OPEN)
    this.render.addClass(this.el.nativeElement.shadowRoot.querySelector("div > svg"), 'bt-active')
  }
}
