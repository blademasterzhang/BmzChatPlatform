import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  myInfo = {
    "userCode":"123456",
    "avator":"http://img3.duitang.com/uploads/item/201507/22/20150722075234_LBKyc.jpeg"
  };

  otherInfo = {
    "userCode":"234567",
    "avator":"http://img5.duitang.com/uploads/item/201508/20/20150820223845_LvRz4.jpeg"
  };

  chats=[{"userCode":"123456",
          "realName":"傻强",
          "avator":"http://img3.duitang.com/uploads/item/201507/22/20150722075234_LBKyc.jpeg",
          "message":"这几年来，你老埋怨没事做，出来混就是不用做嘛，你那么喜欢做事，何不去考警-察？"},
          {"userCode":"123456",
          "realName":"傻强",
          "avator":"http://img3.duitang.com/uploads/item/201507/22/20150722075234_LBKyc.jpeg",
          "message":"做人是这样的，不是你供我就是我供你，你不会供我吧？"},
          {"userCode":"234567",
          "realName":"韩琛",
          "avator":"http://img5.duitang.com/uploads/item/201508/20/20150820223845_LvRz4.jpeg",
          "message":"我可真的是黑社会！"}
          ];

  chat_input:string;

  constructor( public params: NavParams, public viewCtrl: ViewController) {

  }

  send() {
            if(this.chat_input != ''){
              this.chats.push({"userCode":"123456",
                  "realName":"张晓亮",
                  "avator":"http://img3.duitang.com/uploads/item/201507/22/20150722075234_LBKyc.jpeg",
                  "message":this.chat_input});
              this.chat_input = '';
            }
        }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}