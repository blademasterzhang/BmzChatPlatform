import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Nav,NavController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login'; 

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor( public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public navCtrl: NavController, public storage: Storage, private app: App, public nav: Nav) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  loginOut(){
        this.storage.set('loginIn', false)
        this.nav.setRoot(LoginPage)
    }
    
  exitApp(){
    this.platform.exitApp();
  }
}
