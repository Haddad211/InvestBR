import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-investor',
  templateUrl: './chat-investor.component.html',
  styleUrls: ['./chat-investor.component.css']
})
export class ChatInvestorComponent implements OnInit {
  message: string = "";
  messages: any[] = [];
  idinnovator: string = "";
  resmessages:any[]=[];

  constructor(private http: HttpClient, private messageService: MessageService,private router:Router) { }

  ngOnInit() {
    this.savedata();
    this.loadSenderMessages();
  }

  savedata() {
    this.idinnovator = this.messageService.currentConversationId;
  }

  loadSenderMessages() {
    const senderId = localStorage.getItem('userId');
    const receiverId = this.idinnovator;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    this.http.get<any[]>(`http://localhost:8086/sender/messages/${senderId}/${receiverId}`, { headers }).subscribe(
      (data) => {
        this.messages = data;
      },
      (error) => {
        console.error('Error loading messages', error);
      }
    );
  }


  sendMessage() {
    const id = localStorage.getItem('userId');
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const receiverId = this.idinnovator;
    this.http.post<any>(`http://localhost:8086/investor/sendmessage/${id}`, { receiverId: receiverId, content: this.message }, { headers }).subscribe(
      (data) => {
        this.message = '';
        this.loadSenderMessages();
      },
      (error) => {
        console.error('Error sending message', error);
      }
    );
  }

  loadReceiverMessages(){
    const receiverId = localStorage.getItem('userId');
    const senderId = this.idinnovator;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    this.http.get<any[]>(`http://localhost:8086/sender/messages/${senderId}/${receiverId}`, { headers }).subscribe(
      (data) => {
        this.resmessages = data;
      },
      (error) => {
        console.error('Error loading messages', error);
      }
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
