import { PhonePipe } from './../../../pipes/phone/phone.pipe';
import { Directive, Input, Renderer2 } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appMaskIonInput]'
})
export class MaskIonInputDirective {

  @Input()
  appMaskIonInput;

  private onDestroy: Subject<void> = new Subject<void>();

  constructor(public ionInput: IonInput, private ren: Renderer2) {}

  public ngOnInit() {
    this.configureInput();
  }

  public ngOnDestroy() {
    this.onDestroy.next();
  }

  public async configureInput() {
    const pipe = new PhonePipe();
    const input = await this.ionInput.getInputElement();
    this.ionInput
      .ionChange
      .pipe( takeUntil( this.onDestroy ) )
      .subscribe( ( event: CustomEvent ) => {
        console.log("entt ")
        this.ionInput.getInputElement().then(x => {
          console.log("entt "+x.value+" "+pipe.transform(x.value)+" - "+x.innerHTML)
          x.innerHTML = 'o';
          //this.ren.setAttribute(x, 'value', 'oi')
        })
        this.ionInput.value = input.value;
      });
  }


}
