import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit{
  faTimes = faTimes;

constructor( public messagesService:MessagesService) {}

ngOnInit(): void {
    
}
}
