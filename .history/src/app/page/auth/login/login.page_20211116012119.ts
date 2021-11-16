import { AuthService } from './../../../core/authentication/auth.service';
import { AuthRequestService } from './../../../core/services/http/auth/auth-request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  private get username() {
    return this.loginForm.get(['usuario']);
  }
  private get password() {
    return this.loginForm.get(['senha']);
  }

  constructor(private formBuilder: FormBuilder, private http: AuthService,
    private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.creatForm();
    if(this.activedRoute.snapshot.params['email'] !== undefined) {
      this.username.setValue(this.activedRoute.snapshot.params['email']);
    }
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

  buttonCadastrar() {
    console.log("AQUI buttonCadastrar")
    this.http.loginUsername(this.username.value, this.password.value).subscribe(
      () => {console.log("AQUI buttonCadastrar")},
      () => {}
    );
  }
}
