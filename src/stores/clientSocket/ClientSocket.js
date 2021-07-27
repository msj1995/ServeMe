import { observable, action, makeObservable, runInAction } from 'mobx'
import socketIOClient from "socket.io-client";

export class ClientSocket {

    constructor() {
        this.socket = socketIOClient.connect('http://127.0.0.1:5000',{'forceNew':true });

        makeObservable(this, {
            socket:observable,
          })
    }
    
}