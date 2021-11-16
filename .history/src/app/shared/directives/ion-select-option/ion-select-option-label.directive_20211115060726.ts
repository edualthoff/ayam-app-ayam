import { Directive, ElementRef, HostBinding, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appIonSelectOptionLabel]'
})
export class IonSelectOptionLabelDirective {

  @HostBinding('class.alert-message')
  open() {
    this.ren.setProperty(this.el, 'innerHTML', 'oii')
    this.ren.setValue(this.el, "oii")
  }

  constructor(private ren: Renderer2, private el: ElementRef) { }

}
