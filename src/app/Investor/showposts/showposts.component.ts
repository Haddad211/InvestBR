import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',
  styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent implements OnInit {
  iconColors: boolean[] = [];
  posts: any[] = [];
  searchTerm: string="";

  constructor(private router:Router,private http:HttpClient) {

  }

  ngOnInit() {
    this.fetchPosts();
    this.togle();
  }

  togle() {
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

  changeIconColor(index: number) {
    this.iconColors[index] = !this.iconColors[index];
  }

  fetchPosts() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('http://localhost:8086/user/posts', { headers }).subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  searchPosts() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post<any[]>('http://localhost:8086/investor/search', { search: this.searchTerm }, { headers }).subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  sendFriendshipInvitation(id: string,idpost:string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const postid=idpost
    const senderId = localStorage.getItem('userId');
    const data = { senderId,postid };
    this.http.post<any>(`http://localhost:8086/friendshipInvitations/${id}`, data, { headers }).subscribe(
      (data) => {
        console.log('Friendship invitation sent successfully', data);
        const message="new matching demand"
        const dt = { message};
        this.http.post<any>(`http://localhost:8086/innovator/notif/${id}`,dt, { headers }).subscribe()
      },
      (error) => {
        console.error('Error sending friendship invitation', error.error);
      }
    );
  }

}
