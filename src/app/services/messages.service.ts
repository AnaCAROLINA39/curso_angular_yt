import { MessagesComponent } from './../moment/messages/messages.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message:string="";
  constructor() { }
}
