import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnChanges {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("AQUI")
  }

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(){
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  onFacebookLogin() {
    console.log("AQUI")
  }
  onGoogleLogin() {  }
  buttonCadastrar() {}
}
