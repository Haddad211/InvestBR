import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  investorCount: any;
  innovatorCount: any;
  total:any;

  constructor(private http: HttpClient,private router:Router) { }

  fetchData() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    this.http.get<any>('http://localhost:8086/admin/countall', { headers }).subscribe(data => {
      this.investorCount = data.investorCount;
      this.innovatorCount = data.innovatorCount;
      this.total = data.investorCount + data.innovatorCount;
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
