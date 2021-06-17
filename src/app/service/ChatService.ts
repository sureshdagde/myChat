import { Injectable } from '@angular/core';
import { WebsocketService } from './../service/WebsocketService';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ChatService {
  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService.connect().pipe(
      map((response) => {
        return response;
      })
    );
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg: any) {
    this.messages.next(msg);
  }
}
