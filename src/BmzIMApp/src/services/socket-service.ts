import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import io from "socket.io-client";
import {SOCKET_HOST} from "./constants";

@Injectable()
export class SocketService {
  private socket: any;

  constructor() {
    console.log('***Socket constructor init***');
    this.init();
  }

  init() {
    this.socket = io(SOCKET_HOST);

    this.socket.on("connect", () => {
      console.debug('***Socket Connected***');
    });
    this.socket.on("newMsg", (msg) => {
      console.debug('***Socket newMsg***',msg);
    });

    this.socket.on("reconnecting", attempt => {
      console.debug('***Socket Reconnecting***', attempt);
    });

    this.socket.on("reconnect_failed", () => {
      console.debug('***Socket Reconnect failed***');
    });

    this.socket.on('disconnect', () => {
      console.debug('***Socket Disconnected***');
    });

    
  }

  login(userCode)
  {
    console.log("login",userCode);
    this.socket.emit("login",userCode);
  }

  sendMessage(message)
  {
    console.log("postMsg",message)
    this.socket.emit("postMsg",message)
  }

  disconnect() {
    this.socket.disconnect();
  }

  connect() {
    this.socket.connect();
  }
}
