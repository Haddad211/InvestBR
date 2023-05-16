import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-contact-investor',
  templateUrl: './contact-investor.component.html',
  styleUrls: ['./contact-investor.component.css']
})
export class ContactInvestorComponent implements OnInit {
  friendshipAccepted:any[]=[];
  waitingfriendship:any[]=[];
  idinnovator:string="";
  constructor(private router:Router,private http:HttpClient,private messageService: MessageService) {

  }
  ngOnInit() {
    this.loadaccepted()
    this.toggle();
    this.loadwaiting();
}

saveData(id: string) {
  this.messageService.currentConversationId = id;
}
loadwaiting(){
  const id=localStorage.getItem('userID');
  const token=localStorage.getItem('token');
  const headers=new HttpHeaders().set('Authorization', `Bearer ${token}`);
  this.http.get<any[]>(`http://localhost:8086/friendshipAccepted/invest/${id}`, { headers }).subscribe(
    (data) => {
      this.waitingfriendship = data;
    },
    (error) => {
      console.error('Error loading ', error);
    }
  );
}
loadaccepted() {
  const id = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http.get<any[]>(`http://localhost:8086/friendshipAccepted/investor/${id}`, { headers }).subscribe(
    (data) => {
      this.friendshipAccepted = data;
    },
    (error) => {
      console.error('Error loading ', error);
    }
  );
}
delfriendshipsend(id:string){
  const token=localStorage.getItem('token');
  const headers=new HttpHeaders().set('Authorization', `Bearer ${token}`);
  this.http.delete<any[]>(`http://localhost:8086/friendshipdel/invest/${id}`, { headers }).subscribe(
    (data) => {
      console.log(data)
      this.loadwaiting();
      this.loadaccepted();
    },
    (error) => {
      console.error('Error loading ', error);
    }
  );
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

}
