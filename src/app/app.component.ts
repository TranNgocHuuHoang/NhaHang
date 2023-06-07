import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NhaHang';
  constructor(public messageService : MessageService){}
  ngOnInit():void{
    // this.messageService.message = 'Hello Message Service';
  }
}


