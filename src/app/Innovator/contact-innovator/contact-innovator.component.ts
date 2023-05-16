import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-contact-innovator',
  templateUrl: './contact-innovator.component.html',
  styleUrls: ['./contact-innovator.component.css']
})
export class ContactInnovatorComponent implements OnInit {
  friendshipInvitations: any[]= [];
  friendshipAccepted:any[]=[];
  friendshipRejected:any[]=[];
  notif:string=""
  nbnotif:number=0
  constructor(private router:Router,private http: HttpClient,private messageService:MessageService) {

  }
  ngOnInit() {
    this.loadInvitations()
    this.loadaccepted()
    this.loadRejected()
    this.toggle()
    this.notification()
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

  saveData(id:string){
    this.messageService.currentidinvestor=id
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this.router.navigate(['/login']);
  }

  loadInvitations() {
    const id = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(`http://localhost:8086/friendshipInvitations/innovator/${id}`, { headers }).subscribe(
      (data) => {
        this.friendshipInvitations = data;
      },
      (error) => {
        console.error('Error loading invitations', error);
      }
    );
  }

  restnotification(){
    localStorage.setItem('notif',"0");
    this.ngOnInit()
    this.toggle()

  }

  notification(){
    const notif = localStorage.getItem('notif');
    if (notif !== null) {
      this.notif = notif;
      this.nbnotif=parseInt(this.notif,10)
    }

  }
  updateInvitationStatus(id: string, status: string,idinvestor:string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.put(`http://localhost:8086/friendshipInvitations/status/${id}`, { status }, { headers }).subscribe(
      () => {
        console.log('Invitation status updated successfully.');
        this.loadInvitations()
        this.loadaccepted()
        this.loadRejected()
        const message="The matching demand are accepted "
        const dt = { message,idinvestor};
        this.http.post<any>(`http://localhost:8086/investor/notif`,dt, { headers }).subscribe()
      },
      (error) => {
        console.error('Error updating invitation status:', error);
      }
    );
  }
  loadaccepted() {
    const id = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(`http://localhost:8086/friendshipAccepted/innovator/${id}`, { headers }).subscribe(
      (data) => {
        this.friendshipAccepted = data;
      },
      (error) => {
        console.error('Error loading ', error);
      }
    );
  }
  loadRejected() {
    const id = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(`http://localhost:8086/friendshipRejected/innovator/${id}`, { headers }).subscribe(
      (data) => {
        this.friendshipRejected = data;
      },
      (error) => {
        console.error('Error loading ', error);
      }
    );
  }
}
