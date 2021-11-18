import { UsuarioRequestService } from './../../../core/services/http/auth/usuario-request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder, private activedRoute: ActivatedRoute, private router: Router,
     private http: UsuarioRequestService, public alertController: AlertController) { }

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
    this.http.recoveryPass(this.username.value).subscribe(
      () => { this.presentAlert(); },
      () => { this.router.navigate([`/auth/register/${this.username.value}`]) },
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
