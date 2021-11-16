import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }
}
