import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  userInfos = [{
                "userCode":"123456",
                "realName":"铠",
                "avator":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
              },{
                "userCode":"234567",
                "realName":"王昭君",
                "avator":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg"
              }];

  chats=[{"userCode":"123456",
          "message":"这几年来，你老埋怨没事做，出来混就是不用做嘛，你那么喜欢做事，何不去考警-察？"},
          {"userCode":"123456",
          "message":"做人是这样的，不是你供我就是我供你，你不会供我吧？"},
          {"userCode":"234567",
          "message":"我可真的是黑社会！"},
          {"userCode":"123456",
          "message":"好叼呀！"},
          {"userCode":"123456",
          "message":"做人是这样的，不是你供我就是我供你，你不会供我吧？"},
          {"userCode":"234567",
          "message":"我可真的是黑社会！"},
          {"userCode":"123456",
          "message":"做人是这样的，不是你供我就是我供你，你不会供我吧？"},
          {"userCode":"234567",
          "message":"我可真的是黑社会！"},
          {"userCode":"123456",
          "message":"好叼呀！"},
          {"userCode":"123456",
          "message":"做人是这样的，不是你供我就是我供你，你不会供我吧？"},
          ];

  chat_input:string;

  constructor( public params: NavParams, public viewCtrl: ViewController) {

  }

  send() {
            if(this.chat_input != ''){
              this.chats.push({"userCode":"123456",
                  "message":this.chat_input});
              this.chat_input = '';
            }
        }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}