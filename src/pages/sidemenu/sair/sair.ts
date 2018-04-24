import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular'; 
import { StatusBar } from '@ionic-native/status-bar'
import { InicioPage } from '../../inicio/inicio';
import { PainelPage } from '../../sidemenu/painel/painel';
/**
 * Generated class for the SairPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sair',
  templateUrl: 'sair.html'
})
  export class SairPage {
  constructor(public navCtrl: NavController) {
  }
  OPENROOTinicio(){
    this.navCtrl.setRoot(InicioPage);
  }
  openpainel(){
    this.navCtrl.setRoot(PainelPage);
  }
  }


/*export class SairPage {
  platform: any;
  constructor(public alertCtrl: AlertController) {}
    doConfirm(){
      let confirm = this.alertCtrl.create({
        title: 'Tem certeza que queres sair?',
        buttons: [
          {
            text: 'Cancelar',
            handler: (clicked) => {
              console.log('Continuar clicked');
              false;
            }
          },
          {
            text: 'simna',
            role: 'cancel',
            handler: (clicked) => {
              console.log('Continuar clicked');
              this.platform.exitApp();
            }
          }
        ]
      });
      confirm.present()
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SairPage');
  }

}*/


