import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export function formsEqualValueValidators(control: AbstractControl): Validators {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = (control.value === control.value);
    return forbidden ? {passwordEqual: false} : {passwordEqual: true};
  };
}
