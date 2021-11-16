import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }
}
