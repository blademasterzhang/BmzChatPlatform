import {Injectable} from "@angular/core";
import io from "socket.io-client";
import {AppGlobal} from "./app-global";

@Injectable()
export class SocketService {
  private static socket: any;
  private showFun:any;

  constructor() {
    console.log('***Socket constructor init***');
    //this.init();
  }

  setShowFun(fun){
    this.showFun=fun;
  }

  init() {
    SocketService.socket = io(AppGlobal.getInstance().serverUrl);

    SocketService.socket.on("connect", () => {
      console.debug('***Socket Connected***');
    });
    SocketService.socket.on("replyMsg", (msg) => {
      if(this.showFun != undefined){
        this.showFun(msg);
      }
      console.debug('***Socket replyMsg***',msg);
    });

    SocketService.socket.on("reconnecting", attempt => {
      console.debug('***Socket Reconnecting***', attempt);
    });

    SocketService.socket.on("reconnect_failed", () => {
      console.debug('***Socket Reconnect failed***');
    });

    SocketService.socket.on('disconnect', () => {
      console.debug('***Socket Disconnected***');
    });

    
  }



  login(userCode)
  {
    console.log("login",userCode);
    SocketService.socket.emit("login",userCode);
  }

  sendMessage(message)
  {
    console.log("postMsg",message)
    SocketService.socket.emit("postMsg",message)
  }

  disconnect() {
    SocketService.socket.disconnect();
  }

  connect() {
    SocketService.socket.connect();
  }
}
