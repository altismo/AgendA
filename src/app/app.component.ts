import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/eventos/home';
import { ListPage } from '../pages/teste/list';
import { ConfigPage } from '../pages/sidemenu/config/config';
import { MeusPage } from '../pages/sidemenu/meusgrupos/meus';
import { PerfilPage } from '../pages/sidemenu/perfil/perfil';
import { PainelPage } from '../pages/sidemenu/painelprincipal/painel';
import { InicioPage } from '../pages/login/inicio';
import { RecPage } from '../pages/esquecisenha/esquecisenha';
import { NavController } from 'ionic-angular';
import { setupPreloadingImplementation } from 'ionic-angular/util/module-loader';
import { CadPage } from '../pages/cadastro/cadastro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  [x: string]: any;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any, icon:any}>;
  public 
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public toastCtrl: ToastController) {
    /*this.initializeApp();*/
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
 
      platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.counter++;
          this.presentToast();
          setTimeout(() => { this.counter = 0 }, 3000)
        } else {
          console.log("exitapp");
          platform.exitApp();
        }
      }, 0)
    });
  

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Painel', component: PainelPage, icon:"contact"},
      { title: 'Perfil', component: PerfilPage, icon:"person"},
      { title: 'Meus eventos', component: HomePage, icon:"calendar"}, 
      { title: 'Meus grupos', component:MeusPage,icon:"people"},
      { title: 'Configuração', component: ConfigPage,icon:"build"},
    ];

  }
  presentToast(){
    let toast = this.toastCtrl.create({
      message: "Press again to exit",
      duration: 3000,
      position: "middle"
    })
    toast.present();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
