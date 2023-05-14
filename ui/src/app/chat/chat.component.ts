import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  tempName: string = ''
  nombre: string = '';
  messages: any = []
  socket: any;
  texto: string = '';

  ngOnInit(): void {
    this.socket = io(environment.apiUrl);

    this.socket.on('newMessage', (data: any) => {
      console.log('Alguien envio un mensaje');
      this.messages.push(data);
    })
  }

  enviarMensaje() {
    console.log('Enviar el mensaje');
    this.socket.emit('sendMessage', {
      message: this.texto,
      name: this.nombre
    });
    this.messages.push({
      message: this.texto,
      name: this.nombre,
      owned: true
    })
    this.texto = '';
  }

  guardarNombre() {
    this.nombre = this.tempName;
  }

}
