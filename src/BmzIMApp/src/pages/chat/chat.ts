import { Component, ViewChild } from '@angular/core';
import { NavParams,Content } from 'ionic-angular';
import { SocketService } from '../../services/socket-service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

export class ChatPage {
  @ViewChild(Content) content: Content;
  @ViewChild('txtChat') txtChat: any;
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
    "message":"做人是这样的，不是你供我就是我供你，你不会供我吧？"}];
  chatUserCode:any;
  myUserCode:any;
  constructor( public params: NavParams,private socketService: SocketService, public storage: Storage) {
    this.chatUserCode = this.params.get('chatUserCode');
    console.log(this.chatUserCode);
    this.storage.get('loginCode').then((code) => {
      this.myUserCode=code;
      this.socketService.login(this.myUserCode);
    });
  }

  send() {
    this.txtChat.setFocus();
    let message = this.txtChat.content;
    if(message != ''){
      let msg = {"userCode":this.chatUserCode,"message":message};

      this.chats.push(msg);
      this.socketService.sendMessage({'from':this.myUserCode,"to":this.chatUserCode,"message":msg});
      //this.content.scrollToBottom(300);
      setTimeout(function () {
        var itemList = document.getElementById("chat-autoscroll");
        itemList.scrollTop = itemList.scrollHeight;
      }, 10);
      this.txtChat.clearInput();
    }
  }


}