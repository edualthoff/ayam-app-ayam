import { UsuarioRequestService } from './../../../core/services/http/auth/usuario-request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.page.html',
  styleUrls: ['./new-pass.page.scss'],
})
export class NewPassPage implements OnInit {

  form: FormGroup;

  get senha() {
    return this.form.get(['senha']);
  }

  constructor(private formBuilder: FormBuilder, private activedRoute: ActivatedRoute, private http: UsuarioRequestService) { }

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      senha: ['', [Validators.required]],
    });
  }

  buttoRecovery() {
    this.http.recoveryPass(this.senha.value).subscribe(
      () => { this.presentAlert(); },
      () => { },
      () => { }
    )
  }

  private async presentAlert() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Atenção',
      // subHeader: 'Subtitle',
      message: 'Um e-mail foi enviado para você com o link para redefinir sua senha.',
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss().then(() => { this.router.navigate([`/auth/login/${this.username.value}`]) })
  }
}
