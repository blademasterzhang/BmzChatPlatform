import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'; 
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {
  code:string;
  pwd:string;

  constructor(public navCtr: NavController,public storage: Storage,public userService: UserService){ 

    }
    
  loginIn(){
  		this.userService.login(this.code,this.pwd).subscribe(
        data => {
          console.log('data.results',data);
        },
        err => {
          console.log('err',err);
        },
        () => console.log('Movie Search Complete')
      );;
        this.storage.set('loginIn', true)
        this.navCtr.setRoot(TabsPage);
    }
}