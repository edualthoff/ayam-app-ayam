import { AuthService } from './../../../core/authentication/auth.service';
import { SettingPageModule } from './../../../page/usuario/setting/setting.module';
import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CloseActionAppService {


  constructor(private auth: AuthService, private actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Você realmente deseja sai?',
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Sim, desejo sair',
          role: 'destructive',
          // icon: 'trash',
          handler: () => {
            this.auth.logout().subscribe(
              () => {},
              () => {},
              () => {}
            );
          }
        },
        {
          text: 'Cancelar',
          // icon: 'close',
          role: 'cancel',
          handler: () => {}
        }]
    });
    await actionSheet.present();
  }
}
