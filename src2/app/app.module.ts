import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/eventos/home';
import { ListPage } from '../pages/teste/list';
import { NgCalendarModule  } from 'ionic2-calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigPage } from '../pages/sidemenu/config/config';
import { MeusPage } from '../pages/sidemenu/meusgrupos/meus';
import { PerfilPage } from '../pages/sidemenu/perfil/perfil';
import { PainelPage } from '../pages/sidemenu/painelprincipal/painel';
import { InicioPage } from '../pages/login/inicio';
import { RecPage } from '../pages/esquecisenha/esquecisenha';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConfigPage,
    MeusPage,
    PainelPage,
    PerfilPage,
    InicioPage,
    RecPage,
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConfigPage,
    MeusPage,
    PerfilPage,
    PainelPage,
    InicioPage,
    RecPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
