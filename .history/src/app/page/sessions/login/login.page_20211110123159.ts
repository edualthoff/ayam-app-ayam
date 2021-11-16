import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(){
    this.loginForm = this.formBuilder.group({
      usuario: new FormControl({ value: '' }, Validators.compose([
        Validators.required,])),
      senha: new FormControl({ value: '' }, Validators.compose([
        Validators.required,])),
    })
  }
}
