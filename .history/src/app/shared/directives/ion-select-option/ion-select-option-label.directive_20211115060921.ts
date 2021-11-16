import { Directive, ElementRef, HostBinding, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appIonSelectOptionLabel]'
})
export class IonSelectOptionLabelDirective {

  @HostBinding('class.alert-message')
  open() {
    const el = this.el.nativeElement.querySelector('.alert-head')
    this.ren.setProperty(el, 'innerHTML', 'oii')
    console.log("aqui ")
  }

  constructor(private ren: Renderer2, private el: ElementRef) {
    console.log("aqui ")

  }

}
