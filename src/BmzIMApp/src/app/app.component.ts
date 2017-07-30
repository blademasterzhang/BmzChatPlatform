import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = '';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {

    this.storage.get('firstIn').then((firstResult) => { 
             
      if(firstResult){  

        this.storage.get('loginIn').then((loginResult) => { 
          if(loginResult){  
            this.rootPage = TabsPage; 
          } 
          else{
            this.rootPage = LoginPage;
          }
        }); 
        
      } 
      else{
        this.storage.set('firstIn', true);
        this.rootPage = WelcomePage;
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
