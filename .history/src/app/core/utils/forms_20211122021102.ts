import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export function formsEqualValueValidators(params: any): Validators {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = (control.value === params);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
