import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ChatFormPage } from '../chatForm/chatForm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
constructor(public modalCtrl: ModalController) {
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(ChatFormPage, characterNum);
    modal.present();
  }
}