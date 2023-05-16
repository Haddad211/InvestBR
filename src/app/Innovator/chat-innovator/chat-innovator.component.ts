import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat-innovator',
  templateUrl: './chat-innovator.component.html',
  styleUrls: ['./chat-innovator.component.css']
})
export class ChatInnovatorComponent implements OnInit {
  idinvestor:string="";
  message: string = "";
  messages: any[] = [];
  resmessages:any[]=[];
  notif:string=""
  nbnotif:number=0

  constructor(private router:Router,private http: HttpClient,private messageService: MessageService) {

  }
  ngOnInit() {

this.toggle();
this.getdata();
  }
  getdata(){
   this.idinvestor=this.messageService.currentidinvestor
  }
  toggle(){
    const toggle = document.querySelector('.toggle') as HTMLElement;
    const navigation = document.querySelector('.navigation') as HTMLElement;
    const main = document.querySelector('.main') as HTMLElement;

    toggle.addEventListener('click', () => {
      navigation.classList.toggle('active');
      main.classList.toggle('active');
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }




  sendMessage() {

  }





}

