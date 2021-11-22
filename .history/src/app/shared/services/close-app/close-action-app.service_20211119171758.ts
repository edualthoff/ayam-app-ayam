import { AuthService } from './../../../core/authentication/auth.service';
import { SettingPageModule } from './../../../page/usuario/setting/setting.module';
import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: SettingPageModule
})
export class CloseActionAppService {

  constructor(private auth: AuthService, public actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Você realmente deseja sai?',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Sim, desejo sair',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
