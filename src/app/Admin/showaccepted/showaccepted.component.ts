import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showaccepted',
  templateUrl: './showaccepted.component.html',
  styleUrls: ['./showaccepted.component.css']
})
export class ShowacceptedComponent {
  investors: any;
  innovators: any;

  constructor(private http: HttpClient,private router:Router) { }

  deleteUser(userId: string) {
    this.http.delete<any>(`http://localhost:8086/admin/dell/${userId}`, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    }).subscribe(
      response => {
        console.log(response.message);
        this.fetchData();
      },
      error => console.log(error.error)
    );
  }

  fetchData(){
    this.http.get<any>('http://localhost:8086/admin/showaccepted', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    }).subscribe(data => {
      this.investors = data.investors;
      this.innovators = data.innovators;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
