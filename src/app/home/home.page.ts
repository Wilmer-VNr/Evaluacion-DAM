import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService, Message } from '../services/chat.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  messages: Message[] = [];

  // Form fields
  name = '';
  lastName = '';
  age!: number;
  email = '';
  pass = '';
  telf!: number;
  direccion = '';
  fechaNacimiento!: '';

  sender = 'Wilmer Vargas';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(res => {
      this.messages = res;
    });
  }

  sendMessage() {
    if (this.name && this.email) {
      this.chatService.sendMessage(
        this.name,
        this.lastName,
        this.age,
        this.email,
        this.pass,
        this.telf,
        this.direccion,
        this.fechaNacimiento, 
        this.sender
      );
  
  
      this.name = this.lastName = this.email = this.pass = this.direccion = '';
      this.age = this.telf = 0;
      this.fechaNacimiento = '';
    }
  }
  
}
