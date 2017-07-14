import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import * as io from 'socket.io-client';

@Component({
  selector: 'page-chat',
  templateUrl: 'chatForm.html'
})
export class ChatFormPage {
  character;
  socket:any
  chat_input:string;
  chats = [];
  prova=[];
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
      this.socket = io('http://localhost:3000');

      this.socket.on('message', (msg) => {
         console.log("message", msg);
         this.chats.push(msg);
       });

      this.socket.on('prova', (msgProva) => {
           console.log("msgProva", msgProva);
           this.prova.push(msgProva);
       });

    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  send(msg) {
            if(msg != ''){
                this.socket.emit('message', msg);
            }
            this.chat_input = '';
        }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}