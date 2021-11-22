import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export function formsEqualValueValidators(control2: AbstractControl): ValidationErrors  {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = (control.value === control2.value);
    return forbidden ? {passwordEqual: false} : {passwordEqual: true};
  };
}
