import { Component, OnInit } from '@angular/core';
import { MessageService } from "../core/services/message.service";

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'message'];

  messages: { id: number; message: string }[] = [];

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages().map((message, index) => {
      return {
        id: index + 1,
        message,
      }
    });
  }
}
