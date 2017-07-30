import { Component} from '@angular/core';
import { App   } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ChatPage } from '../chat/chat';
import { DetailPage } from '../detail/detail';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UserService]
})
export class HomePage {

  constructor(public app: App, private userService: UserService) {

    userService.getUsers().subscribe(
        data => {
          console.log('data.results',data.results);
        },
        err => {
          console.log('err',err);
        },
        () => console.log('Movie Search Complete')
      );
  }


  openModal(characterNum) {
    this.app.getRootNav().push(DetailPage, characterNum)
  }
}