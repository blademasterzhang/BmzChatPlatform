import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { SlidesPage } from '../pages/slides/slides';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = '';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {

    this.storage.get('121firstIn').then((result) => { 
             
      if(result){  
        this.rootPage = TabsPage; 
      } 
      else{
        this.storage.set('121firstIn', true);
        this.rootPage = SlidesPage;
      }
    }); 

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
