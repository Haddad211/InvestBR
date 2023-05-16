import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification-innovator',
  templateUrl: './notification-innovator.component.html',
  styleUrls: ['./notification-innovator.component.css']
})
export class NotificationInnovatorComponent implements OnInit {
  notif:any[]=[]
  nbnotif:number=0
  constructor(private router:Router,private http:HttpClient) {

  }
  ngOnInit() {

this.toggle()
this.loadnotifications()
  }

  loadnotifications(){
    const id=localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>(`http://localhost:8086/innovator/notif/${id}`, { headers }).subscribe(
      (data) => {
        const {nbNotification,Notification}=data;
        this.notif=Notification
        this.nbnotif=nbNotification
      },
      (error) => {
        console.error('Error loading invitations', error);
      }
    );
  }
  clearnotifications(){
    const id=localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.put<any>(`http://localhost:8086/innovator/notif/clear/${id}`, { headers }).subscribe(
      (data) => {
        this.toggle()
        this.loadnotifications()
      },
      (error) => {
        console.error('Error loading invitations', error);
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
