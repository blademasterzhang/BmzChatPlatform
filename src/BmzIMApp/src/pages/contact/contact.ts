import { Component } from '@angular/core';
import { App,NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public app: App,public navCtrl: NavController) {

  }

openModal(characterNum) {
    this.app.getRootNav().push(ChatPage, characterNum)
  }
}
