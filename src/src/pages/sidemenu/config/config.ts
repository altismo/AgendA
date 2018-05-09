import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InicioPage } from '../../login/inicio';
import { PainelPage } from '../../sidemenu/painelprincipal/painel';


/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Sair da conta?',
      message: 'Você deseja realmente sair?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Deslog cancelado');
          }
        },
        {
          text: 'Sair',
          handler: () => {
            console.log('Deslog aceito');
            this.navCtrl.setRoot(InicioPage);
          }
        }
      ]
    });
    confirm.present();
  }
  
}