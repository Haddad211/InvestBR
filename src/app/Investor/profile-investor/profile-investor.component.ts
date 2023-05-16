import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-profile-investor',
  templateUrl: './profile-investor.component.html',
  styleUrls: ['./profile-investor.component.css']
})
export class ProfileInvestorComponent implements OnInit {
  nbfriends:string="";
  investor: any = {};
  userId: string | null = null;
  token: string | null = null;
  firstname:string="";
  lastname:string="";
  email:string="";
  code:string="";
  company:string="";
  roleCompany: string="";
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
    this.http.get<any>(`http://localhost:8086/investor/profile/${userId}`, httpOptions).subscribe(data => {
      const investor = {
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        phoneCode: data.phoneCode,
        company: data.company,
        roleCompany: data.roleCompany,
        country: data.country,
        zip: data.zip,
        branch: data.branch,
        phone:data.phone
      };
      this.firstname=investor.firstName
        this.lastname=investor.lastName
        this.email=investor.email
        this.code=investor.phoneCode
        this.company=investor.company
        this.roleCompany=investor.roleCompany
        this.country=investor.country
        this.zip=investor.zip
        this.branch=investor.branch
        this.phone=investor.phone
    });
  }

  update() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };

    const investorData = {
      firstname: this.nfirstname,
      lastname: this.nlastname,
      phone: this.nphone
    };

    const userId = localStorage.getItem('userId');
    this.http.put<any>(`http://localhost:8086/investor/update/${userId}`, investorData, httpOptions).subscribe(
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

    this.http.get<any>(`http://localhost:8086/investor/stat/${id}`, { headers }).subscribe(
      (response) => {
        const {invitations } = response;
        this.nbfriends=invitations;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
