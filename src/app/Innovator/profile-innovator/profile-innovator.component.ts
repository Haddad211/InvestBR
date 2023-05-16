import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-profile-innovator',
  templateUrl: './profile-innovator.component.html',
  styleUrls: ['./profile-innovator.component.css']
})

  export class ProfileInnovatorComponent implements OnInit {
    nbposts:string="";
    nbfriends:string="";
    innovator: any = {};
    userId: string | null = null;
    token: string | null = null;
    firstname:string="";
    lastname:string="";
    email:string="";
    code:string="";
    country: string="";
    zip: string="";
    branch: string="";
    phone:string="";
    nfirstname:string="";
    nlastname:string="";
    nphone="";



    constructor(private router: Router, private http:HttpClient) { }

    ngOnInit(): void {
      this.toggle();
      this.fetchData();
      this.onloadstat();
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


    logout(): void {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      this.router.navigate(['/login']);
    }
    fetchData() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      };
      const userId = localStorage.getItem('userId');
      this.http.get<any>(`http://localhost:8086/innovator/profile/${userId}`, httpOptions).subscribe(data => {
        const innovator = {
          firstName: data.firstname,
          lastName: data.lastname,
          email: data.email,
          phoneCode: data.phoneCode,
          country: data.country,
          zip: data.zip,
          branch: data.branch,
          phone:data.phone
        };
        this.firstname=innovator.firstName
          this.lastname=innovator.lastName
          this.email=innovator.email
          this.code=innovator.phoneCode
          this.country=innovator.country
          this.zip=innovator.zip
          this.branch=innovator.branch
          this.phone=innovator.phone
      });
    }
    update() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        })
      };

      const innovatorData = {
        firstname: this.nfirstname,
        lastname: this.nlastname,
        phone: this.nphone
      };
      const userId = localStorage.getItem('userId');
      this.http.put<any>(`http://localhost:8086/innovator/update/${userId}`, innovatorData, httpOptions).subscribe(
        response => {
          console.log(response.message);
          this.fetchData();
        },
        error => console.log(error.error)
      );
    }
    onloadstat() {
      const id = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http.get<any>(`http://localhost:8086/innovator/stat/${id}`, { headers }).subscribe(
        (response) => {
          const { posts, invitations } = response;
          this.nbfriends=invitations;
          this.nbposts=posts;
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }


   }




