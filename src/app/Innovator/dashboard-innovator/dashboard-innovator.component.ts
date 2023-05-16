import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-dashboard-innovator',
  templateUrl: './dashboard-innovator.component.html',
  styleUrls: ['./dashboard-innovator.component.css']
})
export class DashboardInnovatorComponent implements OnInit {
  notif:any[]=[];
  nbnotif:number=0;
  postlist:any[]=[];
  branchlist:any[]=[];
  investorbrach:any[]=[];
  constructor(private router:Router,private http:HttpClient) {

  }
  ngOnInit() {

this.toggle();
this.loadnotifications();
this.loadlistposts();
  }

 statistic(){
  const labels = Object.keys(this.branchlist);
  const data = Object.values(this.branchlist);
    const canvas = <HTMLCanvasElement>document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Could not get 2D context for canvas');
      return;
    }

    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            // Add more colors as needed
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            // Add more colors as needed
          ]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Top Branches in our posts'
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    });
  }

  investorStatistic() {
    const labels = this.investorbrach.map(item => item._id);
    const data = this.investorbrach.map(item => item.count);
    const canvas = <HTMLCanvasElement>document.getElementById('myChartinvestor');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Could not get 2D context for canvas');
      return;
    }

    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              // Add more colors as needed
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              // Add more colors as needed
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Top Branches of Investors',
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    });
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
  loadlistposts(){
    const id=localStorage.getItem('userId');
    const token=localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get<any>(`http://localhost:8086/innovator/listposts/${id}`,{headers}).subscribe(
    (data)=>{

      const {listposts,branchCounts,investorBranchCounts}=data;
      this.postlist=listposts;
      this.branchlist=branchCounts;
      this.investorbrach=investorBranchCounts;

      this.investorStatistic()
      this.statistic()


    },
    (error) => {
      console.error('Error loading invitations', error);
    }

    )
  }
  deletepost(idp: string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const idpost = idp;
    this.http.delete<any[]>('http://localhost:8086/innovator/dellpost', {
      headers,
      body: { idpost }
    }).subscribe(
      (data) => {
        console.log(data);
        this.investorStatistic();
        this.statistic();
        this.toggle();
        this.loadnotifications();
        this.loadlistposts();
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

