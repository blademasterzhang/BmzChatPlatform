import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  chat_input:string;
  constructor( public params: NavParams, public viewCtrl: ViewController) {

  }

  send(msg) {
            if(msg != ''){

            }
            this.chat_input = '';
        }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}