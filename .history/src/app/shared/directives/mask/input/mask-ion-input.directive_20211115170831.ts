import { Directive, Input } from '@angular/core';
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

  constructor(public ionInput: IonInput) {}

  public ngOnInit() {
    this.configureInput();
  }

  public ngOnDestroy() {
    this.onDestroy.next();
  }

  public async configureInput() {
    const input = await this.ionInput.getInputElement();
    this.ionInput
      .ionChange
      .pipe( takeUntil( this.onDestroy ) )
      .subscribe( ( event: CustomEvent ) => {
        console.log("entt ")
        this.ionInput.value = input.value;
      });
  }


}
