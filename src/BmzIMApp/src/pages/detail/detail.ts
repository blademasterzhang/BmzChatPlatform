import { Component } from '@angular/core';
import { App,NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { ChatPage } from '../chat/chat';
import { UserService } from '../../services/user-service';
import { ToolHelper } from '../../tools/tool-helper';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})

export class DetailPage {


  tab1Root = HomePage;
  tab2Root = ContactPage;
  UserDetail:{};
  constructor(public app: App,public navCtrl: NavController,public params: NavParams,public userService: UserService,public toolHelper: ToolHelper) {
    this.UserDetail={'realName':'','backgroundImg':'',imgList:[],address:'',birthday:'',sex:1,sexName:'',age:18,personSign:''};
  	let code = this.params.get('userCode');
  	userService.getUserDetail(code).subscribe(
          data => {
            data.sexName= toolHelper.getSexName(data.sex);
            data.age= toolHelper.getAge(data.birthday);
            this.UserDetail = data;
            console.log(this.UserDetail);
          });
  }

  openModal(characterNum) {
    this.app.getRootNav().push(ChatPage, characterNum)
  }
}
