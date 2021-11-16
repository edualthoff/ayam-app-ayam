import { PhonePipe } from './../../../pipes/phone/phone.pipe';
import { Directive, Input, PipeTransform, Renderer2 } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appMaskIonInput]'
})
export class MaskIonInputDirective {

  @Input()
  appMaskIonInput;

  private onDestroy: Subject<void> = new Subject<void>();

  constructor(public ionInput: IonInput, private ren: Renderer2) {}

  public ngOnInit() {
    switch (this.appMaskIonInput) {
      case 'phone':
        this.configureInput(new PhonePipe());
        break;
      default:
        break;
    }
  }

  public ngOnDestroy() {
    this.onDestroy.next();
  }

  private async configureInput(pipe: PipeTransform) {
    // const input = await this.ionInput.getInputElement();
    this.ionInput
      .ionChange
      .pipe(
        takeUntil( this.onDestroy ))
      .subscribe( ( event: CustomEvent ) => {
        this.ionInput.value = pipe.transform( this.ionInput.value );
      });
  }


}
