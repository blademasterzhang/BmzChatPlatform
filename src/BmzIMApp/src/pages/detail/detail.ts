import { Component } from '@angular/core';
import { App,NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})

export class DetailPage {


  tab1Root = HomePage;
  tab2Root = ContactPage;

  constructor(public app: App,public navCtrl: NavController) {

  }

  openModal(characterNum) {
    this.app.getRootNav().push(ChatPage, characterNum)
  }
}
