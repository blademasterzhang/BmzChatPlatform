import { Component} from '@angular/core';
import { App   } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';
import { UserService } from '../../services/user-service';
import { ToolHelper } from '../../tools/tool-helper';
import { Storage } from '@ionic/storage';
import { SocketService } from '../../services/socket-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nearbyUsers;

  constructor(public app: App, private userService: UserService,public toolHelper: ToolHelper, public storage: Storage,private socketService: SocketService) {
    socketService.init();
    this.nearbyUsers = [];
    console.log("userService.getUsers()");
    this.storage.get('loginCode').then((code) => {
      socketService.login(code);
      userService.getUserDetail(code).subscribe(data=>{
        userService.init(data);
      });
      userService.getUsers(code).subscribe(
        data => {
          this.nearbyUsers = data;
          for(var i in this.nearbyUsers){
              console.log('item',i);
              this.nearbyUsers[i].sexName= toolHelper.getSexName(this.nearbyUsers[i].sex);
              this.nearbyUsers[i].age= toolHelper.getAge(this.nearbyUsers[i].birthday);
          }
          console.log('data.results',data);
        },
        err => {
          console.log('err',err);
        },
        () => console.log('Movie Search Complete')
      );
    });
  }


  openModal(userCode) {
    console.log("openModal");
    this.app.getRootNav().push(DetailPage, userCode)
  }
}