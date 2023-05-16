import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-investor',
  templateUrl: './dashboard-investor.component.html',
  styleUrls: ['./dashboard-investor.component.css']
})
export class DashboardInvestorComponent implements OnInit {
  notif:any[]=[]
  nbnotif:number=0
  topBranches: any[] = [];
  topPosts: any[] = [];
  lastposts:any[]=[];
  constructor(private router:Router,private http:HttpClient) {

  }
  ngOnInit() {

this.toggle()
this.loadnotifications()
this.getTopFourBranches()
this.getTopThreePosts()
this.getLastThreePostsByBranch()
  }

  loadnotifications(){
    const id=localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>(`http://localhost:8086/investor/notif/${id}`, { headers }).subscribe(
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
  getTopFourBranches() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('http://localhost:8086/investor/getTopFourBranches', { headers }).subscribe(
      (data) => {
        this.topBranches = data;
      },
      (error) => {
        console.error('Error loading top branches', error);
      }
    );
  }
  getTopThreePosts() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('http://localhost:8086/investor/getTopThreePosts', { headers }).subscribe(
      (data) => {
        this.topPosts = data;
      },
      (error) => {
        console.error('Error loading top posts', error);
      }
    );
  }
  getLastThreePostsByBranch(){
    const id=localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>(`http://localhost:8086/investor/LastThreePostsByBranch/${id}`, { headers }).subscribe(
      (data) => {
       this.lastposts=data
      },
      (error) => {
        console.error('Error loading posts', error);
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
