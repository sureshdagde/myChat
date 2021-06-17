import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChatService } from '../../src/app/service/ChatService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myChat';
  myMessage:any=[]
;  checkoutForm = this.formBuilder.group({
    chatMessage: 'suresh',
  });
  constructor(private formBuilder: FormBuilder,private chat: ChatService) {}
  onSubmit() {
    console.log("welcome")
  }
  ngOnInit() {
    this.chat.messages.subscribe((msg:any) => {
      console.log("-------------",msg);
      this.myMessage.push(msg.text)
    })
  }

  sendMessage() {
    this.chat.sendMsg(this.checkoutForm.value.chatMessage);
  }
}
