import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadPage } from './cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@NgModule({
  declarations: [
    CadPage,
  ],
  imports: [
    IonicPageModule.forChild(CadPage),
  ],
})
export class CadastroPageModule {}
