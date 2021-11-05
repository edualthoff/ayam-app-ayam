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
    this.open = !this.open;
    console.log("ee click "+this.OPEN)

  }

  @HostBinding('class.bt-active')
  @Input()
  get open(): boolean {
    console.log("ee 5 open "+this.OPEN)
    return this.OPEN;
  }
  set open(value: boolean) {
    console.log("ee 5 set "+value+" "+this.open)
    // Only sub menu can be open
    if(value){
      this.nav.closeOtherButton(this);
    }
  }

  ngOnInit(): void {
    this.nav.addLink(this);
  }

  toggle() {
    if(this.open == true)
    console.log("ee toggle "+this.el.nativeElement.hasAttribute("onclick"))
    this.render.addClass(this.el.nativeElement, 'bt-active')
  };
}
