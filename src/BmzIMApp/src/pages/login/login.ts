import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'; 
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtr: NavController,public storage: Storage){ 

    }
    
  loginIn(){
        this.storage.set('loginIn', true)
        this.navCtr.setRoot(TabsPage);
    }
}