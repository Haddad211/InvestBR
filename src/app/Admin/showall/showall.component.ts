import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent {

  investors: any;
  innovators: any;

  constructor(private http: HttpClient,private router:Router) { }

  addInvestor(userId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    this.http.put<any>(`http://localhost:8086/admin/approve/${userId}`, {}, httpOptions).subscribe(
      response => {
        console.log(response.message);
        this.fetchData();
      },
      error => console.log(error.error)
    );
  }

  addInnovator(userId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    this.http.put<any>(`http://localhost:8086/admin/approve/${userId}`, {}, httpOptions).subscribe(
      response => {
        console.log(response.message);
        this.fetchData();
      },
      error => console.log(error.error)
    );
  }

  deleteUser(userId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    this.http.delete<any>(`http://localhost:8086/admin/dell/${userId}`, httpOptions).subscribe(
      response => {
        console.log(response.message);
        this.fetchData();
      },
      error => console.log(error.error)
    );
  }

  fetchData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    this.http.get<any>('http://localhost:8086/admin/showall', httpOptions).subscribe(data => {
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
