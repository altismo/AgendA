import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PainelPage } from '../sidemenu/painel/painel';
import { RecPage } from '../esquecisenha/esquecisenha';
import {CadPage} from '../cadastro/cadastro'

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  public type = 'password';
  public showPass = false;
 
 
  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  login() {
    this.navCtrl.setRoot(PainelPage);
  }

  recovery() {
    this.navCtrl.push(RecPage);
  }

  cadastro(){
    this.navCtrl.push(CadPage);
  }

}