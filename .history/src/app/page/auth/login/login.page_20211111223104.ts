import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnChanges {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("AQUI")
  }

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(){
    this.loginForm = this.formBuilder.group({
      usuario: new FormControl('', Validators.compose([
        Validators.required,])),
      senha: new FormControl( '', Validators.compose([
        Validators.required,])),
    })
  }

  onFacebookLogin() {
  }
  onGoogleLogin() {  }
  buttonCadastrar() {}
}
