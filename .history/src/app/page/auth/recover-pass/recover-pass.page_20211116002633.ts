import { UsuarioRequestService } from './../../../core/services/http/auth/usuario-request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.page.html',
  styleUrls: ['./recover-pass.page.scss'],
})
export class RecoverPassPage implements OnInit {
  form: FormGroup;

  get username() {
    return this.form.get(['email']);
  }

  constructor(private formBuilder: FormBuilder, private activedRoute: ActivatedRoute, private http: UsuarioRequestService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.creatForm();
    if(this.activedRoute.snapshot.params['username'] !== undefined) {
      this.username.setValue(this.activedRoute.snapshot.params['username']);
    }
  }

  private creatForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

  buttoRecovery() {
    // this.http.recoveryPass(this.username.value).subscribe()
    this.presentAlert();
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

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
