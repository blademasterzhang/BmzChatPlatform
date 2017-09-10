import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'; 
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user-service';
import { MovieService } from '../../services/movie-service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {
  code:string;
  pwd:string;
  err_message:string;

  constructor(public navCtr: NavController,public storage: Storage,public userService: UserService,public movieService: MovieService,http: Http){ 
    }
  
    
  loginIn(){
  		this.userService.login(this.code,this.pwd).subscribe(
        data => {
          if(data.result == 1)
          {
            this.storage.set('loginIn', true)
            this.storage.set('loginCode', this.code)
            this.navCtr.setRoot(TabsPage);
          }
          else
          {
            this.err_message="用户名或者密码错误！";
          }
        },
        err => {
            this.err_message=err;
        },
        () => console.log('login Complete')
      );
    }
}