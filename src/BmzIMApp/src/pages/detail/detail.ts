import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { UserService } from '../../services/user-service';
import { ToolHelper } from '../../tools/tool-helper';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})

export class DetailPage {
  UserDetail:{};
  chatUserCode:any;
  constructor(public app: App,public params: NavParams,public userService: UserService,public toolHelper: ToolHelper) {
    this.UserDetail={'realName':'','backgroundImg':'',imgList:[],address:'',birthday:'',sex:1,sexName:'',age:18,personSign:''};
  	this.chatUserCode = this.params.get('userCode');
  	userService.getUserDetail(this.chatUserCode).subscribe(
          data => {
            data.sexName= toolHelper.getSexName(data.sex);
            data.age= toolHelper.getAge(data.birthday);
            this.UserDetail = data;
            console.log(this.UserDetail);
          });
  }

  openModal() {
    this.app.getRootNav().push(ChatPage, {"chatUserDetail":this.UserDetail})
  }
}
