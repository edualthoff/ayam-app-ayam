import { AuthService } from './../../../core/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loginError = false;

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
  }

  ionViewWillEnter() {
    if(this.activedRoute.snapshot.params['email'] == undefined) {
      this.loginError = false;
      this.username.setValue('');
      this.password.setValue('');
    }
    if(this.activedRoute.snapshot.params['email'] !== undefined) {
      this.username.setValue(this.activedRoute.snapshot.params['email']);
      this.password.setValue('');
      this.loginError = false;
    }
  }

  private creatForm(){
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  onFacebookLogin() {
    console.log("AQUI - facebook implementar")
  }

  onGoogleLogin() {  }

  buttonCadastrar() {
    console.log("AQUI buttonCadastrar")
    this.http.loginUsername(this.username.value, this.password.value).subscribe(
      (x) => {
        this.router.navigateByUrl(x)
      },
      (x: HttpErrorResponse) => {
        if(x.status === 404) {
          this.router.navigate([`/auth/register/${this.username.value}`]);
        } if(x.status === 401) {
          this.loginError = true;
        }
      },
    );
  }
}
