import { Component, ViewChild } from '@angular/core';
import { NavParams,Content } from 'ionic-angular';
import { SocketService } from '../../services/socket-service';
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})

export class ChatPage {
  @ViewChild(Content) content: Content;
  @ViewChild('txtChat') txtChat: any;
  userInfos=[];
  chats=[];
  chatUserDetail:any;

  constructor( public params: NavParams,private socketService: SocketService, public storage: Storage) {
    let that = this;
    this.chatUserDetail = this.params.get('chatUserDetail');
    this.userInfos.push(UserService.getMyUserDetail());
    this.userInfos.push(this.chatUserDetail);
    console.log('this.userInfos',this.userInfos)
    this.socketService.setShowFun(function(msg){
      let chat = {"userCode":msg.from,"message":msg.message.content};
      console.log('chat',chat)
      if(that.chatUserDetail.userCode == msg.from) 
        that.chats.push(chat);
    });
  }

  send() {
    this.txtChat.setFocus();
    let message = this.txtChat.content;
    if(message != ''){
      let chat = {"userCode":UserService.getMyUserDetail().userCode,"message":message};
      this.chats.push(chat);

      let msg = {"dataType":'Text',"content":message};
      this.socketService.sendMessage({'from':UserService.getMyUserDetail().userCode,"to":this.chatUserDetail.userCode,"message":msg});
      
      setTimeout(function () {
        var itemList = document.getElementById("chat-autoscroll");
        itemList.scrollTop = itemList.scrollHeight;
      }, 10);
      this.txtChat.clearInput();
    }
  }
}