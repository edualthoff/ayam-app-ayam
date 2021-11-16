import { AuthService } from './../../../core/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
      ]
    )
  ],
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
    if(this.activedRoute.snapshot.params['email'] !== undefined) {
      this.username.setValue(this.activedRoute.snapshot.params['email']);
    }
  }

  ionViewWillEnter() {
    console("routa log "+this.activedRoute.snapshot.children.toString())
    if(this.activedRoute.snapshot.params['email'] == undefined) {
      this.loginError = false;
      this.username.setValue('');
      this.password.setValue('');
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
