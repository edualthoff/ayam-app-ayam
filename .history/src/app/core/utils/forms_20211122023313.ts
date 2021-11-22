import { AbstractControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";


/** Verificar se dois campos do formulario são iguais */
export function formsEqualValueValidators(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // Verificar se o segundo formulario incontrol um erro
        return;
      }
      // Compara os dois valores caso set true caso erro e null sem erro
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
