import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Nav,NavController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login'; 
import { UserService } from '../../services/user-service';
import { ToolHelper } from '../../tools/tool-helper';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  UserDetail: {};

  constructor( public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public navCtrl: NavController, public storage: Storage, private app: App, public nav: Nav,public userService: UserService,public toolHelper: ToolHelper) {
      this.UserDetail={'realName':'','backgroundImg':'',imgList:[],address:'',birthday:'',sex:1,sexName:'',age:18,personSign:''};
      this.storage.get('loginCode').then((code) => {
      console.log(this.UserDetail)
        userService.getUserDetail(code).subscribe(
          data => {
            data.sexName= toolHelper.getSexName(data.sex);
            data.age= toolHelper.getAge(data.birthday);
            this.UserDetail = data;

          });
      })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //splashScreen.hide();
      
    });
  }

  loginOut(){
        this.storage.set('loginIn', false)
        this.nav.setRoot(LoginPage)
    }
    
  exitApp(){
    this.platform.exitApp();
  }
}
