import { Directive, ElementRef, HostBinding, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appIonSelectOptionLabel]'
})
export class IonSelectOptionLabelDirective {

  @HostBinding('class.alert-message')
  set open() {
    this.ren.setValue(this.el, "oii")
  }

  constructor(private ren: Renderer2, private el: ElementRef) { }

}
